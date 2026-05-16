'use client'

import { LanguageProvider } from '@/components/language-context'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ToolsSection } from '@/components/tools-section'
import { ConsultingSection } from '@/components/consulting-section'
import { AboutSection } from '@/components/about-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ToolsSection />
          <ConsultingSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
