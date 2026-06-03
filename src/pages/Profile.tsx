import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { 
  User, MapPin, Globe, Linkedin, Github, Twitter, Award, ArrowLeft, Loader2
} from 'lucide-react'
import AchievementBadge from '../components/AchievementBadge'

const Profile = () => {
  const { userId } = useParams<{ userId: string }>()
  const [profile, setProfile] = useState<any>(null)
  const [achievements, setAchievements] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (userId) {
      fetchPublicProfile()
    }
  }, [userId])

  const fetchPublicProfile = async () => {
    setLoading(true)
    setError(null)
    try {
      // Fetch profile
      const { data: profileData, error: profileErr } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (profileErr) {
        throw new Error('Profile not found')
      }

      setProfile(profileData)

      // Fetch achievements
      const { data: achievementsData } = await supabase
        .from('user_achievements')
        .select('*')
        .eq('user_id', userId)
        .order('earned_at', { ascending: false })

      setAchievements(achievementsData || [])
    } catch (err: any) {
      console.error('Error fetching public profile:', err)
      setError(err.message || 'Failed to load profile')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  if (error || !profile) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h2>
          <p className="text-gray-600 mb-6">The member profile you are looking for does not exist or has been removed.</p>
          <Link
            to="/network"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md active:scale-95 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Network
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-blue-50/30 to-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <Link
          to="/network"
          className="inline-flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors text-sm font-semibold mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Network Directory
        </Link>

        {/* Portfolio Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-8">
          {/* Header Banner */}
          <div className="h-48 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Profile Header Block */}
          <div className="px-8 pb-8 relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-16 mb-6">
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white relative z-10">
                {profile.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt={profile.full_name || 'Member'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {(profile.full_name || profile.email || '').charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Name and Basic Details */}
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-3xl font-extrabold text-gray-900 flex items-center justify-center sm:justify-start gap-2">
                  {profile.full_name || 'Anonymous Member'}
                  {profile.is_admin && (
                    <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold uppercase rounded-full tracking-wider border border-blue-200">
                      Staff
                    </span>
                  )}
                </h1>
                <p className="text-gray-500 font-medium mt-1">{profile.email}</p>
                {profile.location && (
                  <p className="text-gray-500 text-sm flex items-center justify-center sm:justify-start gap-1 mt-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    {profile.location}
                  </p>
                )}
              </div>

              {/* Social Links Panel */}
              {(profile.linkedin_url || profile.github_url || profile.twitter_url || profile.website) && (
                <div className="flex items-center gap-3 bg-gray-50 px-4 py-2.5 rounded-2xl border border-gray-100 shadow-sm">
                  {profile.linkedin_url && (
                    <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" title="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {profile.github_url && (
                    <a href={profile.github_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors" title="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {profile.twitter_url && (
                    <a href={profile.twitter_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500 transition-colors" title="Twitter/X">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {profile.website && (
                    <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 transition-colors" title="Website">
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Biography */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Biography</h3>
              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                {profile.bio || 'This member has not written a biography yet.'}
              </p>
            </div>

            {/* Skills & Interests */}
            {profile.skills && profile.skills.length > 0 && (
              <div className="border-t border-gray-100 pt-6 mt-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Skills & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 flex items-center mb-6">
            <Award className="h-6 w-6 mr-2 text-blue-600" />
            Earned Badges & Certificates ({achievements.length})
          </h2>

          {achievements.length === 0 ? (
            <div className="text-center py-10 border-2 border-dashed border-gray-100 rounded-2xl">
              <Award className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">No achievement badges earned yet.</p>
              <p className="text-gray-400 text-sm mt-1">Check back later or view contributions.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
              {achievements.map((achievement) => (
                <AchievementBadge key={achievement.id} achievement={achievement} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
