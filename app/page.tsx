import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Concept from '@/components/Concept'
import Sponsors from '@/components/Sponsors'
import Episodes from '@/components/Episodes'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import { features } from '@/config/features'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Concept />
      <Sponsors />
      {features.showGallery && <Gallery />}
      <Episodes />
      <Footer />
    </main>
  )
}

