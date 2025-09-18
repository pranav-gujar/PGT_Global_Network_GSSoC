import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { User, Settings, FileText, Heart, Activity, Edit3, Save, X, Camera } from 'lucide-react'
import { Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import ImageUploadModal from '../components/ImageUploadModal'

// import LoadingSpinner from '../components/LoadingSpinner'; 
// import { usePageLoading } from '../hooks/usePageLoading';

const Dashboard = () => {
  
  const { user, updateProfile } = useAuth()
  const [profile, setProfile] = useState<any>(null)
  const [applications, setApplications] = useState<any[]>([])
  const [activities, setActivities] = useState<any[]>([])
  const [likes, setLikes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [profileImage, setProfileImage] = useState<string>('')
  const [editData, setEditData] = useState({
    full_name: '',
    bio: '',
    location: '',
    website: '',
    avatar_url: ''
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
          avatar_url: profileData.avatar_url || ''
        })
        setProfileImage(profileData.avatar_url || '')
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

    } catch (error) {
      console.error('Error fetching user data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSaveProfile = async () => {
    try {
      await updateProfile(editData)
      setProfile({ ...profile, ...editData })
      setEditMode(false)
    } catch (error) {}
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
    toast.success('Profile photo updated successfully!')
  } catch (error) {
    console.error('Error uploading image:', error)
    toast.error('Failed to update profile photo')
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {profile?.full_name || user.email}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Profile
                </h2>
                {!editMode ? (
                  <button
                    onClick={() => setEditMode(true)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit3 className="h-5 w-5" />
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSaveProfile}
                      className="text-green-600 hover:text-green-800"
                    >
                      <Save className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setEditMode(false)}
                      className="text-gray-600 hover:text-gray-800"
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
                    className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
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
                    className="text-xl font-bold text-gray-900 text-center border-b border-gray-300 focus:border-blue-500 outline-none"
                    placeholder="Your full name"
                  />
                ) : (
                  <h3 className="text-xl font-bold text-gray-900">{profile?.full_name || 'Add your name'}</h3>
                )}
                <p className="text-gray-600">{user.email}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  {editMode ? (
                    <textarea
                      value={editData.bio}
                      onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-gray-600 text-sm">{profile?.bio || 'Add a bio to tell others about yourself'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  {editMode ? (
                    <input
                      type="text"
                      value={editData.location}
                      onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your location"
                    />
                  ) : (
                    <p className="text-gray-600 text-sm">{profile?.location || 'Add your location'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  {editMode ? (
                    <input
                      type="url"
                      value={editData.website}
                      onChange={(e) => setEditData({ ...editData, website: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://yourwebsite.com"
                    />
                  ) : (
                    <p className="text-gray-600 text-sm">
                      {profile?.website ? (
                        <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {profile.website}
                        </a>
                      ) : (
                        'Add your website'
                      )}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Applications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
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

            {/* Liked Posts */}
            {/* <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Liked Posts ({likes.length})
              </h2>
              
              {likes.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No liked posts yet</p>
                  <p className="text-gray-500 text-sm">Like blog posts to see them here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {likes.map((like) => (
                    <div key={like.id} className="border border-gray-200 rounded-lg p-4">
                      <p className="text-gray-600 text-sm">
                        Liked blog post: {like.blog_id}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {new Date(like.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div> */}

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Activity className="h-5 w-5 mr-2" />
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