import React from 'react'
import { Trophy, Award, Shield, Star, Calendar, Heart, Zap } from 'lucide-react'

export interface Achievement {
  id: string
  user_id: string
  title: string
  description: string
  badge_type: string
  earned_at: string
}

interface AchievementBadgeProps {
  achievement: Achievement
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ achievement }) => {
  const getBadgeConfig = (type: string) => {
    switch (type.toLowerCase()) {
      case 'gold':
      case 'trophy':
        return {
          icon: Trophy,
          bgColor: 'bg-yellow-50',
          textColor: 'text-yellow-600',
          borderColor: 'border-yellow-200',
          glowColor: 'shadow-yellow-100',
          label: 'Gold'
        }
      case 'silver':
      case 'award':
        return {
          icon: Award,
          bgColor: 'bg-slate-100',
          textColor: 'text-slate-600',
          borderColor: 'border-slate-300',
          glowColor: 'shadow-slate-100',
          label: 'Silver'
        }
      case 'bronze':
      case 'shield':
        return {
          icon: Shield,
          bgColor: 'bg-amber-50',
          textColor: 'text-amber-700',
          borderColor: 'border-amber-200',
          glowColor: 'shadow-amber-100',
          label: 'Bronze'
        }
      case 'platinum':
      case 'zap':
        return {
          icon: Zap,
          bgColor: 'bg-indigo-50',
          textColor: 'text-indigo-600',
          borderColor: 'border-indigo-200',
          glowColor: 'shadow-indigo-100',
          label: 'Platinum'
        }
      case 'heart':
        return {
          icon: Heart,
          bgColor: 'bg-rose-50',
          textColor: 'text-rose-600',
          borderColor: 'border-rose-200',
          glowColor: 'shadow-rose-100',
          label: 'Community'
        }
      default:
        return {
          icon: Star,
          bgColor: 'bg-blue-50',
          textColor: 'text-blue-600',
          borderColor: 'border-blue-200',
          glowColor: 'shadow-blue-100',
          label: 'Special'
        }
    }
  }

  const config = getBadgeConfig(achievement.badge_type)
  const IconComponent = config.icon

  return (
    <div className="group relative flex flex-col items-center">
      {/* Badge Icon Wrapper */}
      <div className={`p-3 rounded-full border ${config.bgColor} ${config.textColor} ${config.borderColor} shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:scale-110 cursor-pointer`}>
        <IconComponent className="h-6 w-6" />
      </div>

      {/* Badge Name below the icon */}
      <span className="text-xs font-semibold text-gray-700 mt-2 text-center group-hover:text-blue-600 transition-colors truncate max-w-[80px]">
        {achievement.title}
      </span>

      {/* Tooltip detail card */}
      <div className="absolute bottom-full mb-3 hidden group-hover:flex flex-col w-60 bg-gray-900 text-white text-xs rounded-xl p-3 shadow-xl border border-gray-800 z-50 pointer-events-none transform -translate-y-1 transition-all duration-200">
        <div className="flex justify-between items-center mb-1.5">
          <span className="font-bold text-white truncate mr-2">{achievement.title}</span>
          <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase ${config.bgColor} ${config.textColor} border ${config.borderColor}`}>
            {config.label}
          </span>
        </div>
        <p className="text-gray-300 text-xs mb-2 leading-relaxed">{achievement.description}</p>
        <div className="flex items-center text-gray-400 text-[10px] border-t border-gray-800 pt-1.5 gap-1">
          <Calendar className="h-3 w-3" />
          <span>Earned: {new Date(achievement.earned_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
        </div>
        {/* Tooltip triangle indicator */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900"></div>
      </div>
    </div>
  )
}

export default AchievementBadge
