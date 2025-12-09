'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Lightbulb, Globe, Mic } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: Users,
    title: 'Round Table Discussies',
    description: 'Dynamische gesprekken met experts uit zowel business als IT',
  },
  {
    icon: Lightbulb,
    title: 'Innovatie & Trends',
    description: 'De nieuwste ontwikkelingen en toekomstvisies in de digitale wereld',
  },
  {
    icon: Globe,
    title: 'Belgische Focus',
    description: 'Lokale experts en bedrijven die het digitale landschap vormgeven',
  },
  {
    icon: Mic,
    title: 'Video Podcast',
    description: 'Professionele productie met diepgaande, visuele content',
  },
]

const panelists = [
  {
    role: 'Business Expert',
    company: 'Belgisch Bedrijf',
    description: 'Strategische inzichten vanuit bedrijfsperspectief',
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    role: 'IT Expert',
    company: 'Belgisch Bedrijf',
    description: 'Technische expertise en implementatie-ervaring',
    gradient: 'from-green-500/20 to-cyan-500/20',
  },
  {
    role: 'Innovatie Expert',
    company: 'Tech Analyst',
    description: 'Trends en innovaties in de IT-sector',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    role: 'Innovatie Expert',
    company: 'Tech Analyst',
    description: 'Toekomstvisie en digitale transformatie',
    gradient: 'from-pink-500/20 to-violet-500/20',
  },
]

export default function Concept() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="concept" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 border border-white rounded-full" />
        <div className="absolute top-1/3 right-20 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Het Concept
          </span>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-6">
            DIGITAL NEXT
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-dn-orange to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Een uniek platform waar <span className="text-dn-orange font-semibold">business en IT</span> samenkomen 
            om de toekomst van de digitale wereld te bespreken en te shapen. Elke episode brengt 
            experts van verschillende achtergronden samen voor diepgaande round table discussies.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl card-hover hover:border-dn-orange/30"
            >
              <feature.icon 
                size={40} 
                className="mb-6 text-dn-orange group-hover:text-dn-orange-light transition-colors" 
                strokeWidth={1.5}
              />
              <h3 className="font-display text-2xl tracking-wider mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Round Table Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              Het Format
            </span>
            <h3 className="font-display text-4xl md:text-5xl tracking-wider">
              MODERATED ROUND TABLE
            </h3>
          </div>

          {/* Visual representation of round table */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center circle - representing the table */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 border-2 border-dn-orange/20 rounded-full" />
              
              {/* Middle ring */}
              <div className="absolute inset-8 border border-dn-orange/30 rounded-full" />
              
              {/* Inner circle with logo */}
              <div className="absolute inset-16 bg-gradient-to-br from-dn-orange/10 to-transparent rounded-full flex items-center justify-center border border-dn-orange/20">
                <div className="text-center">
                  <Image
                    src="/DIGITAL.png"
                    alt="Digital Next"
                    width={100}
                    height={100}
                    className="mx-auto mb-2 opacity-80 w-24 h-24"
                  />
                  <span className="font-display text-lg tracking-wider">DIGITAL NEXT</span>
                </div>
              </div>

              {/* Panelist positions */}
              {panelists.map((panelist, index) => {
                const angle = (index * 90 - 45) * (Math.PI / 180)
                const radius = 48 // percentage from center
                const x = 50 + radius * Math.cos(angle)
                const y = 50 + radius * Math.sin(angle)
                
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                    className="absolute w-32 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className={`p-4 bg-gradient-to-br ${panelist.gradient} border border-white/10 rounded-xl backdrop-blur-sm`}>
                      <div className="w-10 h-10 bg-white/10 rounded-full mb-2 flex items-center justify-center">
                        <Users size={20} className="text-white/70" />
                      </div>
                      <p className="font-display text-sm tracking-wider">{panelist.role}</p>
                      <p className="text-xs text-gray-500">{panelist.company}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Panelist descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
            {panelists.map((panelist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-4 p-4"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${panelist.gradient} flex items-center justify-center flex-shrink-0`}>
                  <Users size={20} className="text-white/80" />
                </div>
                <div>
                  <h4 className="font-display text-xl tracking-wider">{panelist.role}</h4>
                  <p className="text-gray-500 text-sm">{panelist.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

