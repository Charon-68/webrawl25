import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NoticeBoard from '@/components/NoticeBoard'
import AboutUsGrid from '@/components/AboutUsGrid'
import Facilities from '@/components/Facilities'
import Team from '@/components/Team'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <NoticeBoard />
      <AboutUsGrid />
      <Facilities />
      <Team />
      <Gallery />
      <Contact />
    </main>
  )
}

