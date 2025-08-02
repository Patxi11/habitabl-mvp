'use client'

import { useState } from 'react'
import { MapPin, Users, DollarSign, Calendar, Heart, ArrowRight, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface Project {
  id: string
  title: string
  location: string
  description: string
  type: string
  investmentRange: string
  timeline: string
  stakeholdersNeeded: string[]
  imageUrl: string
  tags: string[]
  impactMetrics: {
    affordableUnits?: number
    greenSpaceAcres?: number
    jobsCreated?: number
  }
}

interface ProjectCardProps {
  project: Project
  onExpressInterest: (projectId: string, interestType: string) => void
}

export default function ProjectCard({ project, onExpressInterest }: ProjectCardProps) {
  const { t } = useLanguage()
  const [showInterestModal, setShowInterestModal] = useState(false)

  const interestTypes = [
    { id: 'invest', label: t('project.interest.invest'), icon: DollarSign },
    { id: 'develop', label: t('project.interest.develop'), icon: Users },
    { id: 'collaborate', label: t('project.interest.collaborate'), icon: Heart },
    { id: 'live', label: t('project.interest.live'), icon: MapPin },
    { id: 'bring', label: t('project.interest.bring'), icon: ArrowRight },
  ]

  const handleInterestClick = (interestType: string) => {
    onExpressInterest(project.id, interestType)
    setShowInterestModal(false)
  }

  return (
    <>
      <div className="card hover:shadow-lg transition-shadow duration-200">
        <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80`
            }}
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{project.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-500">Investment Range:</span>
            <div className="font-medium">{project.investmentRange}</div>
          </div>
          <div>
            <span className="text-gray-500">Timeline:</span>
            <div className="font-medium">{project.timeline}</div>
          </div>
        </div>
        
        {project.impactMetrics && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Impact Metrics</h4>
            <div className="grid grid-cols-3 gap-2 text-sm">
              {project.impactMetrics.affordableUnits && (
                <div className="text-center">
                  <div className="font-semibold text-accent-600">{project.impactMetrics.affordableUnits}</div>
                  <div className="text-gray-500 text-xs">Affordable Units</div>
                </div>
              )}
              {project.impactMetrics.greenSpaceAcres && (
                <div className="text-center">
                  <div className="font-semibold text-accent-600">{project.impactMetrics.greenSpaceAcres}</div>
                  <div className="text-gray-500 text-xs">Green Space Acres</div>
                </div>
              )}
              {project.impactMetrics.jobsCreated && (
                <div className="text-center">
                  <div className="font-semibold text-accent-600">{project.impactMetrics.jobsCreated}</div>
                  <div className="text-gray-500 text-xs">Jobs Created</div>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="mb-4">
          <span className="text-sm text-gray-500">Seeking:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.stakeholdersNeeded.map((stakeholder) => (
              <span key={stakeholder} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                {stakeholder}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => setShowInterestModal(true)}
          className="btn-primary w-full"
        >
          {t('project.interest.title')}
        </button>
      </div>

      {/* Interest Modal */}
      {showInterestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-100 mb-2">{t('project.interest.title')}</h3>
            <p className="text-gray-400 mb-6">{t('project.interest.subtitle')} {project.title}?</p>
            
            <div className="space-y-3">
              {interestTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    onClick={() => handleInterestClick(type.id)}
                    className="w-full flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5 text-primary-600 mr-3" />
                    <span>{type.label}</span>
                  </button>
                )
              })}
            </div>
            
            <button
              onClick={() => setShowInterestModal(false)}
              className="btn-secondary w-full mt-4"
            >
              {t('project.interest.cancel')}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
