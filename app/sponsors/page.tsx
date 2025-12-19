import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Building2, Target, Users, TrendingUp, CheckCircle, Mail, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const benefits = [
  {
    icon: Target,
    title: 'Brand Exposure',
    description: 'Bereik een hoogwaardig publiek van C-level executives, IT experts en innovators in België',
  },
  {
    icon: Users,
    title: 'Netwerk Access',
    description: 'Connecteer met besluitvormers en thought leaders in de digitale sector',
  },
  {
    icon: TrendingUp,
    title: 'Thought Leadership',
    description: 'Positioneer je bedrijf als innovatief leider in digitale transformatie',
  },
  {
    icon: Building2,
    title: 'Talent Acquisition',
    description: 'Maak je bedrijf aantrekkelijk voor top talent door association met innovatie',
  },
]

const packages = [
  {
    name: 'Gold Sponsor',
    description: 'Premium zichtbaarheid en maximale exposure',
    features: [
      'Logo prominent op website en in episodes',
      'Mentioning in elke episode',
      'Dedicated sponsor segment',
      'Social media mentions',
      'Logo op alle marketing materiaal',
    ],
    highlighted: true,
  },
  {
    name: 'Silver Sponsor',
    description: 'Goede zichtbaarheid en exposure',
    features: [
      'Logo op website en in episodes',
      'Mentioning in episodes',
      'Social media mentions',
      'Logo op marketing materiaal',
    ],
    highlighted: false,
  },
]

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              Sponsorship
            </span>
            <h1 className="font-display text-5xl md:text-7xl tracking-wider mb-6">
              WORD SPONSOR VAN<br />DIGITAL NEXT
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-dn-orange to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Ondersteun Digital Next en bereik een hoogwaardig publiek van digitale innovators, 
              C-level executives en IT experts in België. Positioneer je bedrijf als thought leader 
              in digitale transformatie.
            </p>
            <a
              href="mailto:info@digitalnext.be?subject=Sponsorship Inquiry"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-dn-orange to-dn-orange-dark text-white px-8 py-4 rounded-full font-medium hover:from-dn-orange-light hover:to-dn-orange transition-all shadow-lg shadow-dn-orange/25"
            >
              <Mail size={20} />
              Neem Contact Op
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-gradient-to-b from-black via-dn-dark to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-6">
              WAAROM SPONSOREN?
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-dn-orange to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Digital Next biedt unieke kansen voor bedrijven die willen investeren in digitale innovatie en thought leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-dn-orange/30 transition-all"
              >
                <benefit.icon 
                  size={40} 
                  className="mb-6 text-dn-orange" 
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-xl tracking-wider mb-3">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-6">
              SPONSORSHIP PAKKETTEN
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-dn-orange to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Kies het pakket dat het beste past bij jouw marketing doelen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-8 rounded-2xl border ${
                  pkg.highlighted
                    ? 'bg-gradient-to-br from-dn-orange/10 to-dn-orange-dark/10 border-dn-orange/30'
                    : 'bg-gradient-to-br from-white/5 to-transparent border-white/10'
                }`}
              >
                {pkg.highlighted && (
                  <div className="inline-block bg-dn-orange text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                    Populair
                  </div>
                )}
                <h3 className="font-display text-3xl tracking-wider mb-2">{pkg.name}</h3>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-dn-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:info@digitalnext.be?subject=Sponsorship Inquiry - {pkg.name}"
                  className={`block w-full text-center py-4 rounded-full font-medium transition-all ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-dn-orange to-dn-orange-dark text-white hover:from-dn-orange-light hover:to-dn-orange shadow-lg shadow-dn-orange/25'
                      : 'border border-dn-orange/50 text-white hover:bg-dn-orange/10 hover:border-dn-orange'
                  }`}
                >
                  Vraag Offerte Aan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-b from-black via-dn-dark to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-12 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-6">
                KLAAR OM TE SPONSOREN?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Neem contact met ons op om te bespreken hoe Digital Next kan helpen 
                jouw marketing doelen te bereiken.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@digitalnext.be?subject=Sponsorship Inquiry"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-dn-orange to-dn-orange-dark text-white px-8 py-4 rounded-full font-medium hover:from-dn-orange-light hover:to-dn-orange transition-all shadow-lg shadow-dn-orange/25"
                >
                  <Mail size={20} />
                  Contact Opnemen
                </a>
                <a
                  href="/#episodes"
                  className="flex items-center justify-center gap-2 border border-dn-orange/50 px-8 py-4 rounded-full font-medium hover:bg-dn-orange/10 hover:border-dn-orange transition-colors text-white"
                >
                  Bekijk Episodes
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

