'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const sponsors = [
  {
    id: 1,
    name: 'AE Partner',
    logo: '/Logo-AE-Partner.png',
    alt: 'AE Partner Logo - Partner in Digital Excellence',
    website: 'https://www.ae.be',
  },
  {
    id: 2,
    name: 'Sponsor 2',
    logo: '/sponsor-placeholder.png',
    alt: 'Sponsor 2 Logo',
    website: null,
  },
  {
    id: 3,
    name: 'Sponsor 3',
    logo: '/sponsor-placeholder.png',
    alt: 'Sponsor 3 Logo',
    website: null,
  },
  {
    id: 4,
    name: 'Sponsor 4',
    logo: '/sponsor-placeholder.png',
    alt: 'Sponsor 4 Logo',
    website: null,
  },
]

export default function Sponsors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Onze Sponsors
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-6">
            MET DANK AAN ONZE PARTNERS
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-dn-orange to-transparent mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Deze bedrijven maken Digital Next mogelijk en delen onze visie op digitale innovatie
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {sponsors.map((sponsor, index) => {
            const SponsorContent = (
              <div className="aspect-square bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center hover:border-dn-orange/30 transition-all duration-300 hover:bg-white/10 w-full h-full">
                {sponsor.logo.includes('placeholder') ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-medium">{sponsor.name}</span>
                  </div>
                ) : (
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    width={200}
                    height={200}
                    className="object-contain max-w-full max-h-full opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                )}
              </div>
            )

            return (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {sponsor.website ? (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={`Visit ${sponsor.name} website`}
                  >
                    {SponsorContent}
                  </a>
                ) : (
                  SponsorContent
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">
            Wil je ook sponsor worden van Digital Next?
          </p>
          <a
            href="/sponsors"
            className="inline-flex items-center gap-2 text-dn-orange hover:text-dn-orange-light transition-colors font-medium group"
          >
            Ontdek Sponsorship Mogelijkheden
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

