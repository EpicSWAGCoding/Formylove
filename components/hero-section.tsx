"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Heart } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            initial={{ 
              x: Math.random() * 100 + "%",
              y: "100%",
              rotate: 0,
              scale: 0.5 + Math.random() * 0.5
            }}
            animate={{ 
              y: "-10%",
              rotate: 360,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            <Heart className="w-8 h-8 md:w-12 md:h-12 fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-muted-foreground font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            С 2018 года
          </p>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-8 text-balance"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          Наша История
          <br />
          <span className="text-primary italic">Любви</span>
        </motion.h1>

        <motion.p
          className="font-sans text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 text-pretty"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Каждый момент с тобой — это маленькое чудо, которое я храню в своем сердце навсегда
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="#timeline"
            className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-foreground/70 hover:text-foreground transition-colors"
          >
            Листай вниз
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Date badge */}
      <motion.div
        className="absolute bottom-8 right-8 text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="font-serif text-4xl md:text-5xl text-foreground/10 font-light">
          08.10.18
        </p>
      </motion.div>
    </section>
  )
}
