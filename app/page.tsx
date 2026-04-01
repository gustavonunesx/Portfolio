import ParticlesBackground from '@/components/particles-background'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Projects from '@/components/projects'
import Clients from '@/components/clients'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Particles Background */}
      <ParticlesBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Clients />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
