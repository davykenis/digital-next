'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, ChevronRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const upcomingEpisodes = [
  {
    id: 1,
    number: '01',
    title: 'De Toekomst van AI in Belgische Bedrijven',
    description: 'Hoe transformeert artificial intelligence de Belgische bedrijfswereld? Welke kansen liggen er voor innovatie en hoe kunnen bedrijven AI strategisch inzetten? Een discussie over praktische implementatie, ethische overwegingen en de toekomst van werk.',
    topics: ['AI Strategie', 'Innovatie', 'Digitalisering', 'Belgische Markt'],
    lookingFor: 'We zoeken C-level executives, IT leiders en AI experts die hun visie willen delen.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: 2,
    number: '02',
    title: 'Cloud Transformatie: Van Strategie tot Executie',
    description: 'Hoe migreren Belgische ondernemingen succesvol naar de cloud? Wat zijn de belangrijkste valkuilen en hoe bouw je een solide cloud strategie? Praktische inzichten van bedrijven die de transformatie hebben doorlopen.',
    topics: ['Cloud Migratie', 'IT Strategie', 'Digital Transformatie'],
    lookingFor: 'Cloud architects, IT directors en executives met cloud ervaring gezocht.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    id: 3,
    number: '03',
    title: 'Cybersecurity in het Digitale Tijdperk',
    description: 'Wat zijn de grootste cyberbedreigingen voor Belgische organisaties? Hoe bescherm je je bedrijf tegen moderne aanvallen en bouw je een robuuste security cultuur? Een gesprek over best practices en toekomstige uitdagingen.',
    topics: ['Cybersecurity', 'Risk Management', 'Digital Veiligheid'],
    lookingFor: 'CISO\'s, security experts en risk managers welkom om te delen.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    featured: false,
  },
  {
    id: 4,
    number: '04',
    title: 'Data-Driven Decision Making',
    description: 'Hoe gebruiken Belgische bedrijven data analytics en business intelligence voor betere besluitvorming? Welke rol speelt data in strategische planning en hoe creëer je een data-driven cultuur binnen je organisatie?',
    topics: ['Data Analytics', 'Business Intelligence', 'Strategie'],
    lookingFor: 'CDO\'s, data scientists en executives met data expertise gezocht.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    featured: false,
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
          {upcomingEpisodes.filter(ep => !ep.featured).map((episode, index) => (
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

