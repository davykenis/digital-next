'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Youtube, Linkedin, Twitter, Instagram, Mail, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const footerLinks = [
  {
    title: 'Podcast',
    links: [
      { name: 'Episodes', href: '#episodes' },
      { name: 'Over Ons', href: '#concept' },
      { name: 'Gasten', href: '#' },
      { name: 'Sponsor Worden', href: '#' },
    ],
  },
  {
    title: 'Platforms',
    links: [
      { name: 'YouTube', href: '#' },
      { name: 'Spotify', href: '#' },
      { name: 'Apple Podcasts', href: '#' },
      { name: 'Google Podcasts', href: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Gast Worden', href: '#' },
      { name: 'Samenwerken', href: '/sponsors' },
      { name: 'Pers', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-dn-dark border-t border-white/10">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-12 md:p-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              Word Gast
            </span>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-6">
              DEEL JE EXPERTISE<br />MET DIGITAL NEXT
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              We zoeken C-level executives, IT experts, innovators en auteurs die hun visie willen delen. 
              Positioneer je bedrijf, bouw je thought leadership op, of promoot je boek en expertise.
            </p>
            
            {/* Value Props Detailed Overview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
              {/* C-Level Executives */}
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl text-left">
                <p className="text-sm text-blue-400 uppercase tracking-wider mb-4 font-semibold">Voor C-Level Executives</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Positioneer je bedrijf als innovatief leider</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Strategisch netwerken met andere executives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Peer learning en industry insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Talent acquisition en employer branding</span>
                  </li>
                </ul>
              </div>
              
              {/* IT Experts & Innovators */}
              <div className="p-6 bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-xl text-left">
                <p className="text-sm text-green-400 uppercase tracking-wider mb-4 font-semibold">Voor IT Experts & Innovators</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Bouw je thought leadership op</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Netwerken met peers en executives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Exposure en persoonlijke branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Deel uitmaken van innovatief platform</span>
                  </li>
                </ul>
              </div>

              {/* Auteurs & Thought Leaders */}
              <div className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl text-left">
                <p className="text-sm text-orange-400 uppercase tracking-wider mb-4 font-semibold">Voor Auteurs & Thought Leaders</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Promoot je boek of expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Netwerken met besluitvormers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Verkoop je diensten en producten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dn-orange mt-1">✓</span>
                    <span className="text-white text-sm">Bouw je persoonlijke merk op</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@digitalnext.be"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-dn-orange to-dn-orange-dark text-white px-8 py-4 rounded-full font-medium hover:from-dn-orange-light hover:to-dn-orange transition-all shadow-lg shadow-dn-orange/25"
              >
                <Mail size={20} />
                Contact Opnemen
              </a>
              <a
                href="#concept"
                className="flex items-center justify-center gap-2 border border-dn-orange/50 px-8 py-4 rounded-full font-medium hover:bg-dn-orange/10 hover:border-dn-orange transition-colors text-white"
              >
                Ontdek de Waarde
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/digital-next-logo.png"
                alt="Digital Next"
                width={70}
                height={70}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-display text-2xl tracking-wider">DIGITAL NEXT</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">De digitale wereld van morgen</p>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-sm">
              Business en IT samen brengen om de toekomst van de digitale wereld te shapen. 
              Elke episode brengt experts samen voor diepgaande discussies over digitale innovatie in België.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-dn-orange/20 hover:text-dn-orange transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-display text-lg tracking-wider mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-dn-orange transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Digital Next. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-dn-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-dn-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-dn-orange transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

