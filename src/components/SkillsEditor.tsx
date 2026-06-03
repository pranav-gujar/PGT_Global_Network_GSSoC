import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'

interface SkillsEditorProps {
  skills: string[]
  onChange: (skills: string[]) => void
}

const SkillsEditor: React.FC<SkillsEditorProps> = ({ skills, onChange }) => {
  const [input, setInput] = useState('')

  const addSkill = (skillName: string) => {
    const trimmed = skillName.trim()
    if (!trimmed) return
    
    // Capitalize first letter of each word for clean display
    const formatted = trimmed
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    if (!skills.includes(formatted)) {
      onChange([...skills, formatted])
    }
    setInput('')
  }

  const removeSkill = (indexToRemove: number) => {
    onChange(skills.filter((_, idx) => idx !== indexToRemove))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addSkill(input)
    } else if (e.key === ',') {
      e.preventDefault()
      addSkill(input)
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2 min-h-[46px] p-2 bg-gray-50 border border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold rounded-full hover:bg-blue-100 transition-all cursor-default"
          >
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="hover:bg-blue-200 text-blue-500 hover:text-blue-700 rounded-full p-0.5 transition-colors focus:outline-none"
              title={`Remove ${skill}`}
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
        {skills.length === 0 && (
          <span className="text-gray-400 text-sm p-1">No skills added yet.</span>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a skill (press Enter or comma)"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm transition-all"
        />
        <button
          type="button"
          onClick={() => addSkill(input)}
          className="inline-flex items-center justify-center px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-md focus:outline-none text-sm font-medium gap-1"
        >
          <Plus className="h-4 w-4" /> Add
        </button>
      </div>
    </div>
  )
}

export default SkillsEditor
