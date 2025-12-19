'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, ChevronRight, ArrowUpRight, HelpCircle } from 'lucide-react'
import Image from 'next/image'

const upcomingEpisodes = [
  {
    id: 1,
    number: '01',
    title: 'De toekomst van belgische bedrijven',
    description: 'Hoe zien Belgische bedrijven eruit in de toekomst? Welke transformaties staan er voor de deur en hoe kunnen organisaties zich hierop voorbereiden? Een discussie over strategische visie, innovatie en de toekomst van de Belgische bedrijfswereld.',
    topics: ['Toekomstvisie', 'Innovatie', 'Digitalisering', 'Belgische Markt'],
    lookingFor: 'We zoeken C-level executives, IT leiders en strategische experts die hun visie willen delen.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: 2,
    number: '02',
    title: 'AI komt niet voor onze jobs — maar zijn onze mensen er klaar voor?',
    description: 'AI transformeert de manier waarop we werken, maar de echte uitdaging ligt niet bij de technologie zelf. Zijn onze medewerkers klaar voor deze verandering? Welke vaardigheden en mindset zijn nodig? Een open gesprek over menselijke voorbereiding op de AI-revolutie.',
    topics: ['AI', 'Mens & Technologie', 'Change Management', 'Skills'],
    lookingFor: 'HR leiders, change managers, AI experts en executives die ervaring hebben met AI-adoptie gezocht.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    id: 3,
    number: '03',
    title: 'Waarom chaos het nieuwe normaal is — en wat dat vraagt van leiders.',
    description: 'Chaos en onzekerheid zijn niet langer uitzonderingen, maar de nieuwe realiteit. Hoe leiden organisaties in deze omgeving? Welke leiderschapskwaliteiten zijn essentieel en hoe creëer je veerkracht in onzekere tijden? Een gesprek over leiderschap in complexiteit.',
    topics: ['Leiderschap', 'Chaos', 'Veerkracht', 'Navigatie'],
    lookingFor: 'C-level executives, leiders en strategen die hebben geleerd navigeren door complexiteit welkom.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: 4,
    number: '04',
    title: 'Hoe creeër je snelheid in tijden van verandering?',
    description: 'Snelheid is cruciaal in een snel veranderende wereld. Maar hoe creëer je snelheid zonder kwaliteit te verliezen? Welke structuren en processen helpen organisaties om sneller te innoveren en te reageren? Praktische tips van bedrijven die snelheid hebben weten te realiseren.',
    topics: ['Snelheid', 'Innovatie', 'Agiliteit', 'Organisatie'],
    lookingFor: 'Innovatie leiders, agile coaches en executives met ervaring in snelle transformatie gezocht.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: 5,
    number: '05',
    title: 'Digitalisering faalt zelden door technologie — maar door mensen en structuren.',
    description: 'Technologie is zelden het probleem bij mislukte digitalisering. Het zijn de mensen, cultuur en organisatiestructuren die bepalen of transformatie slaagt. Wat zijn de belangrijkste valkuilen en hoe voorkom je ze? Praktische inzichten van bedrijven die het wel goed hebben gedaan.',
    topics: ['Digitalisering', 'Organisatie', 'Cultuur', 'Transformatie'],
    lookingFor: 'Transformatie leiders, organisatie experts en executives met ervaring in digitale transformatie gezocht.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    id: 6,
    number: '06',
    title: 'Wat moeten we vandaag doen om morgen nog relevant te zijn?',
    description: 'Relevantie is geen gegeven, maar iets wat je actief moet onderhouden. Welke acties moeten organisaties vandaag ondernemen om morgen nog van waarde te zijn? Een strategische discussie over toekomstbestendigheid en het creëren van blijvende relevantie.',
    topics: ['Relevantie', 'Strategie', 'Toekomstbestendigheid', 'Innovatie'],
    lookingFor: 'Strategische leiders, innovators en executives die nadenken over lange termijn relevantie welkom.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    id: 7,
    number: 'SPECIAL',
    title: 'Seizoensafsluiter',
    description: 'Een exclusieve surprise aflevering die het seizoen afsluit met special guests en onverwachte inzichten. Wat staat er op het programma? Dat blijft een verrassing...',
    topics: ['Surprise', 'Special Guests', 'Seizoensafsluiter'],
    lookingFor: 'We zoeken special guests die bereid zijn om deel te nemen aan deze unieke aflevering.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    featured: false,
    surprise: true,
  },
]

export default function Episodes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="episodes" className="relative py-32 bg-gradient-to-b from-black via-dn-dark to-black">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Aankomende Episodes
          </span>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-6">
            UPCOMING EPISODES
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-dn-orange to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We zijn op zoek naar experts die willen deelnemen aan deze diepgaande discussies over digitale innovatie in België
          </p>
        </motion.div>

        {/* Featured Episode */}
        {upcomingEpisodes.filter(ep => ep.featured).map((episode) => (
          <motion.div
            key={episode.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative group episode-card overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <Image
                    src={episode.image}
                    alt={episode.title}
                    fill
                    className="object-cover episode-image transition-transform duration-700"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 rounded-full bg-dn-orange flex items-center justify-center shadow-xl shadow-dn-orange/50">
                      <Play size={32} className="text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Episode number badge */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-dn-orange to-dn-orange-dark text-white px-4 py-2 rounded-full font-display text-lg tracking-wider">
                    EP {episode.number}
                  </div>
                  {/* Coming Soon badge */}
                  <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    Coming Soon
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
                    {episode.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {episode.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Topics</p>
                    <div className="flex flex-wrap gap-2">
                      {episode.topics.map((topic, i) => (
                        <span key={i} className="text-sm bg-dn-orange/10 border border-dn-orange/30 text-dn-orange px-3 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6 p-4 bg-white/5 border border-dn-orange/20 rounded-xl">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="text-dn-orange font-semibold">We zoeken gasten:</span> {episode.lookingFor}
                    </p>
                  </div>
                  <a 
                    href="#contact"
                    className="self-start flex items-center gap-2 bg-gradient-to-r from-dn-orange to-dn-orange-dark text-white px-6 py-3 rounded-full font-medium hover:from-dn-orange-light hover:to-dn-orange transition-all shadow-lg shadow-dn-orange/25 group/btn"
                  >
                    Word Gast
                    <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Episode Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEpisodes.filter(ep => !ep.featured && !ep.surprise).map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group episode-card"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent card-hover h-full hover:border-dn-orange/30">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={episode.image}
                    alt={episode.title}
                    fill
                    className="object-cover episode-image transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  {/* Episode number */}
                  <div className="absolute bottom-4 left-4 font-display text-6xl text-white/10">
                    {episode.number}
                  </div>
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-dn-orange flex items-center justify-center shadow-lg shadow-dn-orange/50">
                      <Play size={24} className="text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="font-display text-xl tracking-wider mb-2 group-hover:text-dn-orange transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                    {episode.description}
                  </p>
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {episode.topics.slice(0, 2).map((topic, i) => (
                        <span key={i} className="text-xs bg-dn-orange/10 border border-dn-orange/30 text-dn-orange px-2 py-0.5 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href="#contact"
                    className="flex items-center text-sm text-gray-400 group-hover:text-dn-orange transition-colors"
                  >
                    Word Gast
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Surprise Episode - Special Design in Grid */}
          {upcomingEpisodes.filter(ep => ep.surprise).map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + (upcomingEpisodes.filter(ep => !ep.featured && !ep.surprise).length * 0.1) + (index * 0.1) }}
              className="group episode-card"
            >
              <div className="overflow-hidden rounded-2xl border-2 border-dn-orange/50 bg-gradient-to-br from-dn-orange/10 via-dn-orange-dark/5 to-black card-hover h-full relative">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-dn-orange/5 via-transparent to-dn-orange/5 animate-pulse" />
                
                {/* Mystery Placeholder - No Image */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-dn-orange/20 via-dn-orange-dark/10 to-black">
                  {/* Special badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-dn-orange to-dn-orange-dark text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg shadow-dn-orange/50">
                    Seizoensafsluiter
                  </div>
                  
                  {/* Mystery overlay - always visible but subtle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center opacity-40 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-dn-orange/20 border-2 border-dn-orange/50 flex items-center justify-center mb-3 mx-auto backdrop-blur-sm">
                        <HelpCircle size={32} className="text-dn-orange" strokeWidth={2} />
                      </div>
                      <p className="text-white text-sm font-medium">Stay tuned...</p>
                      <p className="text-gray-400 text-xs mt-1">Coming Soon</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="mb-3">
                    <span className="inline-block bg-gradient-to-r from-dn-orange to-dn-orange-dark text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg shadow-dn-orange/25">
                      Seizoensafsluiter
                    </span>
                  </div>
                  <h3 className="font-display text-xl tracking-wider mb-2 text-white group-hover:text-dn-orange-light transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                    {episode.description}
                  </p>
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {episode.topics.slice(0, 2).map((topic, i) => (
                        <span key={i} className="text-xs bg-dn-orange/20 border border-dn-orange/50 text-dn-orange px-2 py-0.5 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href="#contact"
                    className="flex items-center text-sm text-dn-orange group-hover:text-dn-orange-light transition-colors font-medium"
                  >
                    Word Special Guest
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Heb je een interessant topic of wil je deelnemen aan een van deze discussies? 
            We zijn altijd op zoek naar experts die hun visie willen delen.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 border border-dn-orange/50 px-8 py-4 rounded-full font-medium hover:bg-dn-orange/10 hover:border-dn-orange transition-colors text-white"
          >
            Word Gast
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

