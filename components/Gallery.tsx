'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
    alt: 'Round table discussie setup',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
    alt: 'Gasten in gesprek',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
    alt: 'Podcast opname',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    alt: 'Team meeting',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=600&h=400&fit=crop',
    alt: 'Studio setup',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop',
    alt: 'Business meeting',
    span: 'col-span-2',
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Behind the Scenes
          </span>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-6">
            DIGITAL NEXT IN BEELD
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-dn-orange to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Een kijkje achter de schermen van onze round table discussies
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-white/80">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-dn-orange/20 py-12"
        >
          {[
            { value: '4+', label: 'Episodes' },
            { value: '16+', label: 'Expert Gasten' },
            { value: '4h+', label: 'Content' },
            { value: '∞', label: 'Inzichten' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-5xl md:text-6xl tracking-wider mb-2 text-dn-orange">{stat.value}</div>
              <div className="text-gray-500 uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

