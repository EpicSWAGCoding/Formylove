import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { GiftsSection } from "@/components/gifts-section"
import { FooterSection } from "@/components/footer-section"

export default function LoveStoryPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TimelineSection />
      <GiftsSection />
      <FooterSection />
    </main>
  )
}
