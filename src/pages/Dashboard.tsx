import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { 
  User, Settings, FileText, Heart, Activity, Edit3, Save, X, Camera,
  Linkedin, Github, Twitter, Globe, Award
} from 'lucide-react'
import { Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import ImageUploadModal from '../components/ImageUploadModal'
import SkillsEditor from '../components/SkillsEditor'
import AchievementBadge from '../components/AchievementBadge'

const Dashboard = () => {
  const { user, updateProfile } = useAuth()
  const [profile, setProfile] = useState<any>(null)
  const [applications, setApplications] = useState<any[]>([])
  const [activities, setActivities] = useState<any[]>([])
  const [likes, setLikes] = useState<any[]>([])
  const [achievements, setAchievements] = useState<any[]>([])
  const [allProfiles, setAllProfiles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const [saving, setSaving] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [profileImage, setProfileImage] = useState<string>('')
  
  // Admin Award form state
  const [adminAwardUserId, setAdminAwardUserId] = useState('')
  const [adminAwardTitle, setAdminAwardTitle] = useState('')
  const [adminAwardDesc, setAdminAwardDesc] = useState('')
  const [adminAwardType, setAdminAwardType] = useState('gold')
  const [awarding, setAwarding] = useState(false)

  const [editData, setEditData] = useState({
    full_name: '',
    bio: '',
    location: '',
    website: '',
    avatar_url: '',
    skills: [] as string[],
    linkedin_url: '',
    github_url: '',
    twitter_url: ''
  })

  useEffect(() => {
    if (user !== undefined && user !== null) {
      console.log("User is available:", user)
      fetchUserData()
    } else {
      console.warn("User not found. Redirecting or retrying...")
    }
  }, [user])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 8000)
    return () => clearTimeout(timeout)
  }, [])

  const fetchProfilesForAdmin = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, full_name, email')
        .order('full_name', { ascending: true })
      if (error) throw error
      setAllProfiles(data || [])
      if (data && data.length > 0) {
        setAdminAwardUserId(data[0].id)
      }
    } catch (err) {
      console.error('Error fetching profiles for admin panel:', err)
    }
  }

  const fetchUserData = async () => {
    if (!user) return;
    try {
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user!.id)
        .single()

      if (profileData) {
        setProfile(profileData)
        setEditData({
          full_name: profileData.full_name || '',
          bio: profileData.bio || '',
          location: profileData.location || '',
          website: profileData.website || '',
          avatar_url: profileData.avatar_url || '',
          skills: profileData.skills || [],
          linkedin_url: profileData.linkedin_url || '',
          github_url: profileData.github_url || '',
          twitter_url: profileData.twitter_url || ''
        })
        setProfileImage(profileData.avatar_url || '')

        if (profileData.is_admin) {
          fetchProfilesForAdmin()
        }
      }

      const { data: applicationsData } = await supabase
        .from('applications')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false })

      setApplications(applicationsData || [])

      const { data: activitiesData } = await supabase
        .from('user_activities')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false })
        .limit(10)

      setActivities(activitiesData || [])

      const { data: likesData } = await supabase
        .from('blog_likes')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false })

      setLikes(likesData || [])

      // Fetch user achievements
      const { data: achievementsData } = await supabase
        .from('user_achievements')
        .select('*')
        .eq('user_id', user!.id)
        .order('earned_at', { ascending: false })
      setAchievements(achievementsData || [])

    } catch (error) {
      console.error('Error fetching user data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatAndValidateUrl = (url: string, platformName: string): string | null => {
    const trimmed = url.trim()
    if (!trimmed) return ''
    let target = trimmed
    if (!/^https?:\/\//i.test(trimmed)) {
      target = `https://${trimmed}`
    }
    try {
      new URL(target)
      return target
    } catch (_) {
      toast.error(`Invalid URL format for ${platformName}`)
      return null
    }
  }

  const handleSaveProfile = async () => {
    // Validate URLs
    const linkedin = formatAndValidateUrl(editData.linkedin_url, 'LinkedIn')
    if (linkedin === null) return
    const github = formatAndValidateUrl(editData.github_url, 'GitHub')
    if (github === null) return
    const twitter = formatAndValidateUrl(editData.twitter_url, 'Twitter/X')
    if (twitter === null) return
    const website = formatAndValidateUrl(editData.website, 'Website')
    if (website === null) return

    const finalData = {
      ...editData,
      linkedin_url: linkedin,
      github_url: github,
      twitter_url: twitter,
      website: website
    }

    try {
      await updateProfile(finalData)
      setProfile({ ...profile, ...finalData })
      setEditMode(false)
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  const handleImageUpload = async (file: File, _previewUrl?: string) => {
    try {
      if (!user) throw new Error("Not logged in")

      const fileExt = file.name.split('.').pop()
      const fileName = `${user.id}-${Date.now()}.${fileExt}`
      const filePath = `avatars/${fileName}`

      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true })

      if (uploadError) throw uploadError

      // Get public URL
      const { data } = supabase.storage.from('avatars').getPublicUrl(filePath)
      const publicUrl = data.publicUrl

      // Save URL to profile
      await updateProfile({ avatar_url: publicUrl })

      // Update local state
      setProfileImage(publicUrl)
      setProfile(prev => prev ? { ...prev, avatar_url: publicUrl } : null)
      toast.success('Profile photo updated successfully!')
    } catch (error) {
      console.error('Error uploading image:', error)
      toast.error('Failed to update profile photo')
    }
  }

  const handleAwardBadge = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!adminAwardUserId || !adminAwardTitle.trim() || !adminAwardDesc.trim()) {
      toast.error('Please fill out all fields')
      return
    }

    setAwarding(true)
    try {
      const { error } = await supabase
        .from('user_achievements')
        .insert({
          user_id: adminAwardUserId,
          title: adminAwardTitle.trim(),
          description: adminAwardDesc.trim(),
          badge_type: adminAwardType
        })

      if (error) throw error

      toast.success('Badge awarded successfully!')
      setAdminAwardTitle('')
      setAdminAwardDesc('')

      // If the badge was awarded to the current user, refresh their own badges
      if (adminAwardUserId === user!.id) {
        const { data: achievementsData } = await supabase
          .from('user_achievements')
          .select('*')
          .eq('user_id', user!.id)
          .order('earned_at', { ascending: false })
        setAchievements(achievementsData || [])
      }
    } catch (error: any) {
      console.error('Error awarding badge:', error)
      toast.error(error.message || 'Failed to award badge')
    } finally {
      setAwarding(false)
    }
  }

  if (!user) {
    return <Navigate to="/" replace />
  }

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back, {profile?.full_name || user.email}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                const nextAdmin = !profile?.is_admin
                try {
                  await updateProfile({ is_admin: nextAdmin })
                  setProfile(prev => prev ? { ...prev, is_admin: nextAdmin } : null)
                  toast.success(`Admin status ${nextAdmin ? 'enabled' : 'disabled'}`)
                  if (nextAdmin) {
                    fetchProfilesForAdmin()
                  }
                } catch (err) {
                  toast.error('Failed to update admin role')
                }
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg transition-all shadow hover:shadow-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center gap-1.5"
            >
              <span className={`w-2.5 h-2.5 rounded-full ${profile?.is_admin ? 'bg-green-500' : 'bg-gray-400'}`}></span>
              Role: {profile?.is_admin ? 'Admin' : 'Member'} (Toggle Mode)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-600" />
                  Profile
                </h2>
                {!editMode ? (
                  <button
                    onClick={() => setEditMode(true)}
                    className="text-blue-600 hover:text-blue-800 p-1.5 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit Profile"
                  >
                    <Edit3 className="h-5 w-5" />
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSaveProfile}
                      className="text-green-600 hover:text-green-800 p-1.5 hover:bg-green-50 rounded-lg transition-colors"
                      title="Save Profile"
                    >
                      {saving ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600" />
                      ) : (
                        <Save className="h-5 w-5" />
                      )}
                    </button>
                    <button
                      onClick={() => setEditMode(false)}
                      className="text-gray-600 hover:text-gray-800 p-1.5 hover:bg-gray-50 rounded-lg transition-colors"
                      title="Cancel Changes"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>

              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          {(profile?.full_name || user.email || '').charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setShowImageModal(true)}
                    disabled={saving}
                    className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Change profile photo"
                  >
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                {editMode ? (
                  <input
                    type="text"
                    value={editData.full_name}
                    onChange={(e) => setEditData({ ...editData, full_name: e.target.value })}
                    className="text-xl font-bold text-gray-900 text-center border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                    placeholder="Your full name"
                  />
                ) : (
                  <h3 className="text-xl font-bold text-gray-900">{profile?.full_name || 'Add your name'}</h3>
                )}
                <p className="text-gray-600">{user.email}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Bio</label>
                  {editMode ? (
                    <textarea
                      value={editData.bio}
                      onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      rows={3}
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-gray-700 text-sm whitespace-pre-line">{profile?.bio || 'Add a bio to tell others about yourself'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</label>
                  {editMode ? (
                    <input
                      type="text"
                      value={editData.location}
                      onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your location"
                    />
                  ) : (
                    <p className="text-gray-700 text-sm">{profile?.location || 'Add your location'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Website</label>
                  {editMode ? (
                    <input
                      type="url"
                      value={editData.website}
                      onChange={(e) => setEditData({ ...editData, website: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="https://yourwebsite.com"
                    />
                  ) : (
                    <p className="text-gray-700 text-sm">
                      {profile?.website ? (
                        <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                          <Globe className="h-3.5 w-3.5" />
                          {profile.website.replace(/^https?:\/\//i, '')}
                        </a>
                      ) : (
                        'Add your website'
                      )}
                    </p>
                  )}
                </div>

                {/* Edit Social Links Fields */}
                {editMode && (
                  <div className="space-y-3 pt-3 border-t border-gray-100">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Social Links</h4>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">LinkedIn URL</label>
                      <input
                        type="text"
                        value={editData.linkedin_url}
                        onChange={(e) => setEditData({ ...editData, linkedin_url: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="linkedin.com/in/username"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">GitHub URL</label>
                      <input
                        type="text"
                        value={editData.github_url}
                        onChange={(e) => setEditData({ ...editData, github_url: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="github.com/username"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Twitter/X URL</label>
                      <input
                        type="text"
                        value={editData.twitter_url}
                        onChange={(e) => setEditData({ ...editData, twitter_url: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="twitter.com/username"
                      />
                    </div>
                  </div>
                )}

                {/* Edit Mode Skills Editor */}
                {editMode ? (
                  <div className="pt-3 border-t border-gray-100">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Skills & Interests</label>
                    <SkillsEditor
                      skills={editData.skills}
                      onChange={(skills) => setEditData({ ...editData, skills })}
                    />
                  </div>
                ) : (
                  profile?.skills && profile.skills.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Skills & Interests</label>
                      <div className="flex flex-wrap gap-1.5">
                        {profile.skills.map((skill: string, idx: number) => (
                          <span key={idx} className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}

                {/* Social media links display */}
                {!editMode && (profile?.linkedin_url || profile?.github_url || profile?.twitter_url || profile?.website) && (
                  <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                    {profile?.linkedin_url && (
                      <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" title="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {profile?.github_url && (
                      <a href={profile.github_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors" title="GitHub">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {profile?.twitter_url && (
                      <a href={profile.twitter_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500 transition-colors" title="Twitter/X">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {profile?.website && (
                      <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 transition-colors" title="Website">
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Achievements/Badges Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <Award className="h-5 w-5 mr-2 text-blue-600" />
                Achievements
              </h2>
              {achievements.length === 0 ? (
                <div className="text-center py-6 border border-dashed border-gray-200 rounded-lg">
                  <Award className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">No achievements awarded yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-y-6 gap-x-3 pt-2">
                  {achievements.map((achievement) => (
                    <AchievementBadge key={achievement.id} achievement={achievement} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Admin Panel: Award Badges */}
            {profile?.is_admin && (
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center text-blue-800">
                  <Award className="h-5 w-5 mr-2 text-blue-600" />
                  Admin Panel: Award Achievements
                </h2>
                <form onSubmit={handleAwardBadge} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Member</label>
                    <select
                      value={adminAwardUserId}
                      onChange={(e) => setAdminAwardUserId(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm bg-white"
                    >
                      {allProfiles.length === 0 ? (
                        <option value="">No members found</option>
                      ) : (
                        allProfiles.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.full_name || 'Unnamed Member'} ({p.email})
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Badge Title</label>
                      <input
                        type="text"
                        value={adminAwardTitle}
                        onChange={(e) => setAdminAwardTitle(e.target.value)}
                        placeholder="e.g. Star Mentor"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Badge Tier</label>
                      <select
                        value={adminAwardType}
                        onChange={(e) => setAdminAwardType(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm bg-white"
                      >
                        <option value="gold">Gold (Trophy)</option>
                        <option value="silver">Silver (Award)</option>
                        <option value="bronze">Bronze (Shield)</option>
                        <option value="platinum">Platinum (Zap)</option>
                        <option value="heart">Community (Heart)</option>
                        <option value="special">Special (Star)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={adminAwardDesc}
                      onChange={(e) => setAdminAwardDesc(e.target.value)}
                      placeholder="Describe the member's outstanding contribution..."
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                      rows={3}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={awarding || !adminAwardUserId}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg shadow transition-all duration-200 active:scale-95 text-sm"
                  >
                    {awarding ? 'Awarding...' : 'Award Badge'}
                  </button>
                </form>
              </div>
            )}

            {/* Applications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                My Applications ({applications.length})
              </h2>
              
              {applications.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No applications yet</p>
                  <p className="text-gray-500 text-sm">Apply for positions to see them here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {applications.map((application) => (
                    <div key={application.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{application.position_title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          application.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                          application.status === 'accepted' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        Type: {application.position_type.charAt(0).toUpperCase() + application.position_type.slice(1)}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Applied: {new Date(application.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Activity className="h-5 w-5 mr-2 text-blue-600" />
                Recent Activities
              </h2>
              
              {activities.length === 0 ? (
                <div className="text-center py-8">
                  <Activity className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No activities yet</p>
                  <p className="text-gray-500 text-sm">Your activities will appear here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="border border-gray-200 rounded-lg p-4">
                      <p className="text-gray-900 font-medium">{activity.activity_type}</p>
                      <p className="text-gray-500 text-sm">
                        {new Date(activity.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <ImageUploadModal
        isOpen={showImageModal}
        onClose={() => setShowImageModal(false)}
        onImageSelect={handleImageUpload}
        currentImage={profileImage}
      />
    </div>
  )
}

export default Dashboard