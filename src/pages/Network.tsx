import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { 
  Search, MapPin, Globe, Linkedin, Github, Twitter, User, Award, Filter, Loader2, ArrowRight
} from 'lucide-react'

const Network = () => {
  const [profiles, setProfiles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    fetchProfiles()
  }, [])

  const fetchProfiles = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('full_name', { ascending: true })

      if (error) throw error
      setProfiles(data || [])
    } catch (err) {
      console.error('Error fetching members:', err)
    } finally {
      setLoading(false)
    }
  }

  // Extract unique skills from all profiles
  const uniqueSkills = Array.from(
    new Set(profiles.flatMap(p => p.skills || []))
  ).sort()

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    )
  }

  // Filter profiles based on search query and selected skills
  const filteredProfiles = profiles.filter(profile => {
    const nameMatch = (profile.full_name || '').toLowerCase().includes(searchQuery.toLowerCase())
    const bioMatch = (profile.bio || '').toLowerCase().includes(searchQuery.toLowerCase())
    const locationMatch = (profile.location || '').toLowerCase().includes(searchQuery.toLowerCase())
    const emailMatch = (profile.email || '').toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSearch = nameMatch || bioMatch || locationMatch || emailMatch

    const matchesSkills = selectedSkills.length === 0 || 
      selectedSkills.every(skill => (profile.skills || []).includes(skill))

    return matchesSearch && matchesSkills
  })

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Community Network
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Connect with professionals, mentors, and fellow learners in our global network. Search members by skills, location, or interests.
          </p>
        </div>

        {/* Search and Filters Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search members by name, bio, location, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-250 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
              />
            </div>
            
            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-5 py-3 rounded-xl border flex items-center justify-center gap-2 font-medium text-sm transition-all active:scale-95 ${
                showFilters || selectedSkills.length > 0
                  ? 'bg-blue-50 border-blue-205 text-blue-600 shadow-sm'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Filter className="h-4 w-4" />
              Skills Filter {selectedSkills.length > 0 && `(${selectedSkills.length})`}
            </button>
          </div>

          {/* Skill Filter Chips */}
          {(showFilters || selectedSkills.length > 0) && (
            <div className="mt-5 pt-5 border-t border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Filter by Skills</span>
                {selectedSkills.length > 0 && (
                  <button
                    onClick={() => setSelectedSkills([])}
                    className="text-xs font-semibold text-red-500 hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>
              
              {uniqueSkills.length === 0 ? (
                <p className="text-xs text-gray-500">No skills tags found across profiles.</p>
              ) : (
                <div className="flex flex-wrap gap-2 animate-fade-in">
                  {uniqueSkills.map(skill => {
                    const isSelected = selectedSkills.includes(skill)
                    return (
                      <button
                        key={skill}
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          isSelected
                            ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                            : 'bg-gray-50 border-gray-205 text-gray-600 hover:bg-gray-100 hover:border-gray-300'
                        }`}
                      >
                        {skill}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Member Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin h-10 w-10 text-blue-600 mb-4" />
            <p className="text-gray-500 font-medium">Loading member directory...</p>
          </div>
        ) : filteredProfiles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-1">No Members Found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any profiles matching your search query. Try clearing your filters or using different keywords.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map(profile => (
              <div 
                key={profile.id} 
                className="bg-white rounded-2xl shadow hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {/* Banner Strip */}
                <div className="h-20 bg-gradient-to-r from-blue-500 to-indigo-600 relative"></div>
                
                {/* Profile Main Info */}
                <div className="p-6 pt-0 relative flex-1">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md bg-white -mt-8 mb-4 relative z-10">
                    {profile.avatar_url ? (
                      <img
                        src={profile.avatar_url}
                        alt={profile.full_name || 'Member'}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          {(profile.full_name || profile.email || '').charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name and staff tag */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                      {profile.full_name || 'Anonymous Member'}
                    </h3>
                    {profile.is_admin && (
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[9px] font-bold uppercase rounded-md tracking-wider border border-blue-200 shrink-0">
                        Staff
                      </span>
                    )}
                  </div>

                  {/* Location */}
                  {profile.location && (
                    <p className="text-gray-500 text-xs flex items-center gap-1 mb-3">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {profile.location}
                    </p>
                  )}

                  {/* Bio Preview */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed min-h-[60px]">
                    {profile.bio || 'No bio provided yet.'}
                  </p>

                  {/* Skills tags preview (top 3) */}
                  {profile.skills && profile.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {profile.skills.slice(0, 3).map((skill: string, idx: number) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-semibold rounded-full border border-blue-100 animate-fade-in"
                        >
                          {skill}
                        </span>
                      ))}
                      {profile.skills.length > 3 && (
                        <span className="text-[10px] text-gray-500 font-semibold self-center ml-1">
                          +{profile.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  {/* Social Icons Panel */}
                  <div className="flex items-center gap-3">
                    {profile.linkedin_url && (
                      <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" title="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {profile.github_url && (
                      <a href={profile.github_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors" title="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {profile.twitter_url && (
                      <a href={profile.twitter_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500 transition-colors" title="Twitter/X">
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {profile.website && (
                      <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 transition-colors" title="Website">
                        <Globe className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  {/* Portfolio Link Button */}
                  <Link
                    to={`/profile/${profile.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View Portfolio
                    <ArrowRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Network
