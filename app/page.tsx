import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NoticeBoard from '@/components/NoticeBoard'
import About from '@/components/About'
import Facilities from '@/components/Facilities'
import Team from '@/components/Team'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <NoticeBoard />
      <About />
      <Facilities />
      <Team />
      <Gallery />
      <Footer />
    </main>
  )
}

