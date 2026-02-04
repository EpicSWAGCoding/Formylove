"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function FooterSection() {
  const startDate = new Date("2018-10-08")
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - startDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const diffYears = Math.floor(diffDays / 365)
  const remainingDays = diffDays % 365

  return (
    <footer className="py-20 md:py-32 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-sm tracking-widest text-background/50 uppercase mb-8">
            Вместе уже
          </p>
          
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
            <div className="text-center">
              <span className="font-serif text-5xl md:text-7xl lg:text-8xl font-light block">
                {diffYears}
              </span>
              <span className="font-sans text-sm text-background/60">лет</span>
            </div>
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <div className="text-center">
              <span className="font-serif text-5xl md:text-7xl lg:text-8xl font-light block">
                {remainingDays}
              </span>
              <span className="font-sans text-sm text-background/60">дней</span>
            </div>
          </div>

          <p className="font-serif text-xl md:text-2xl text-background/80 mb-12 italic max-w-lg mx-auto">
            &ldquo;Ты — моя любимая история, которую я хочу перечитывать каждый день&rdquo;
          </p>

          <div className="flex items-center justify-center gap-2 text-background/40">
            <span className="font-sans text-sm">Сделано с</span>
            <Heart className="w-4 h-4 fill-primary text-primary" />
            <span className="font-sans text-sm">для тебя</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
