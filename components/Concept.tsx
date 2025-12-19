'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Lightbulb, Globe, Mic, Users, Building2, Target, Network, Award, ArrowUpRight, BookOpen } from 'lucide-react'

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
        {/* Section header with intro text and AE Partner Logo */}
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
          
          {/* Intro text */}
          <p className="text-xl text-gray-400 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Een uniek platform waar <span className="text-dn-orange font-semibold">business en IT</span> samenkomen 
            om de toekomst van de digitale wereld te bespreken en te shapen. Elke episode brengt 
            experts van verschillende achtergronden samen voor diepgaande round table discussies.
          </p>
          
          {/* AE Partner Logo */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider">
                Een initiatief van
              </p>
              <a
                href="https://www.ae.be"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
                aria-label="Visit AE Partner website"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-dn-orange/50 hover:bg-white/10 transition-all duration-300 inline-block">
                  <Image
                    src="/Logo-AE-Partner.png"
                    alt="AE Partner Logo - Partner in Digital Excellence"
                    width={250}
                    height={125}
                    className="object-contain h-14 md:h-16 opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>
            </div>
          </div>
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

        {/* Waarom Deelnemen Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              Waarom Deelnemen?
            </span>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-6">
              DE WAARDE VOOR JOU
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-dn-orange to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Digital Next biedt verschillende waarde voor verschillende types experts. 
              Ontdek wat deelname voor jou kan betekenen.
            </p>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* C-Level Executives */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30">
                  <Building2 size={32} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider">Voor C-Level Executives</h3>
                  <p className="text-sm text-gray-500">CEO's, CTO's, CDO's</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Target size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Positioneer je bedrijf als innovatief leider</p>
                    <p className="text-sm text-gray-400">Toon aan dat jouw organisatie voorop loopt in digitale transformatie</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Network size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Strategisch netwerken met andere leiders</p>
                    <p className="text-sm text-gray-400">Connecteer met C-level executives en IT experts uit verschillende sectoren</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Peer learning en industry insights</p>
                    <p className="text-sm text-gray-400">Leer van andere executives en deel jouw ervaringen</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Talent acquisition en employer branding</p>
                    <p className="text-sm text-gray-400">Maak je bedrijf aantrekkelijk voor top talent door thought leadership</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* IT Experts & Innovators */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-8 bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center border border-green-500/30">
                  <Users size={32} className="text-green-400" />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider">Voor IT Experts & Innovators</h3>
                  <p className="text-sm text-gray-500">Tech experts, innovators</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Target size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Bouw je thought leadership op</p>
                    <p className="text-sm text-gray-400">Deel je expertise en positioneer jezelf als expert in jouw domein</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Network size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Netwerken met peers en executives</p>
                    <p className="text-sm text-gray-400">Connecteer met andere experts en besluitvormers in de Belgische markt</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Exposure en persoonlijke branding</p>
                    <p className="text-sm text-gray-400">Vergroot je zichtbaarheid en bereik een breder publiek</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Deel uitmaken van innovatief platform</p>
                    <p className="text-sm text-gray-400">Word onderdeel van het platform dat de digitale toekomst van België vormgeeft</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Auteurs & Thought Leaders */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-8 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30">
                  <BookOpen size={32} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider">Voor Auteurs & Thought Leaders</h3>
                  <p className="text-sm text-gray-500">Auteurs, sprekers, experts</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Target size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Promoot je boek of expertise</p>
                    <p className="text-sm text-gray-400">Deel je kennis en verhoog de zichtbaarheid van je werk</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Network size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Netwerken met besluitvormers</p>
                    <p className="text-sm text-gray-400">Connecteer met executives en experts die jouw expertise waarderen</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Verkoop je diensten en producten</p>
                    <p className="text-sm text-gray-400">Bereik een relevant publiek voor je consultancy, training of producten</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white mb-1">Bouw je persoonlijke merk op</p>
                    <p className="text-sm text-gray-400">Positioneer jezelf als autoriteit in jouw vakgebied</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-dn-orange to-dn-orange-dark text-white px-8 py-4 rounded-full font-medium hover:from-dn-orange-light hover:to-dn-orange transition-all shadow-lg shadow-dn-orange/25"
            >
              Word Gast
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}


