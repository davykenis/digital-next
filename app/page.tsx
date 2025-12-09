import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Concept from '@/components/Concept'
import Episodes from '@/components/Episodes'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Concept />
      <Gallery />
      <Episodes />
      <Footer />
    </main>
  )
}

