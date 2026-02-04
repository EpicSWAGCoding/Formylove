"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Heart } from "lucide-react"
import { timelineEvents, type TimelineEvent } from "@/lib/timeline-config"
import { TimelineMediaCard } from "./timeline-media-card"

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    [index % 2 === 0 ? -50 : 50, 0, 0]
  )

  const isAlternate = index % 2 !== 0
  const hasMedia = Boolean(event.image)

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className={`flex items-start gap-4 md:gap-8 ${isAlternate ? "flex-row-reverse" : "flex-row"} mb-12 md:mb-20`}
    >
      {/* Content */}
      <div className={`flex-1 ${isAlternate ? "text-left" : "text-right"}`}>
        <div className={`inline-block ${event.highlight ? "bg-primary/10 p-4 md:p-6 rounded-2xl" : ""}`}>
          <p className="font-sans text-xs md:text-sm tracking-widest text-muted-foreground uppercase mb-1">
            {event.date}.{event.year}
          </p>
          <h3 className={`font-serif text-lg md:text-2xl lg:text-3xl font-light text-foreground mb-4 ${event.highlight ? "text-primary" : ""}`}>
            {event.title}
          </h3>
          
          {/* Media card */}
          {hasMedia && (
            <div className={`mt-4 ${isAlternate ? "text-left" : "text-right"}`}>
              <TimelineMediaCard event={event} isAlternate={isAlternate} />
            </div>
          )}
        </div>
      </div>

      {/* Center dot */}
      <div className="relative flex-shrink-0 mt-2">
        <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${event.highlight ? "bg-primary" : "bg-border"} relative z-10`}>
          {event.highlight && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>
      </div>

      {/* Empty space for alignment */}
      <div className="flex-1" />
    </motion.div>
  )
}

function YearDivider({ year }: { year: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="flex items-center justify-center py-12 md:py-20"
    >
      <div className="flex items-center gap-4 md:gap-8">
        <div className="w-16 md:w-32 h-px bg-border" />
        <span className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-foreground/20">
          {year}
        </span>
        <div className="w-16 md:w-32 h-px bg-border" />
      </div>
    </motion.div>
  )
}

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Group events by year
  const eventsByYear = timelineEvents.reduce((acc, event) => {
    if (!acc[event.year]) {
      acc[event.year] = []
    }
    acc[event.year].push(event)
    return acc
  }, {} as Record<string, TimelineEvent[]>)

  const years = Object.keys(eventsByYear).sort()

  return (
    <section id="timeline" className="py-20 md:py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="w-8 h-8 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Наш Путь
          </h2>
          <p className="font-sans text-muted-foreground max-w-md mx-auto">
            Моменты, которые сделали нас теми, кем мы стали
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Events by year */}
          {years.map((year) => (
            <div key={year}>
              <YearDivider year={year} />
              {eventsByYear[year].map((event, i) => {
                const globalIndex = timelineEvents.findIndex(
                  e => e.date === event.date && e.year === event.year && e.title === event.title
                )
                return (
                  <TimelineItem 
                    key={`${event.date}-${event.year}-${i}`} 
                    event={event} 
                    index={globalIndex} 
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
