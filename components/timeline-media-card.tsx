"use client"

import React from "react"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, ImageIcon } from "lucide-react"
import type { TimelineEvent } from "@/lib/timeline-config"

interface TimelineMediaCardProps {
  event: TimelineEvent
  isAlternate: boolean
}

export function TimelineMediaCard({ event, isAlternate }: TimelineMediaCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [imageError, setImageError] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    if (event.music && audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.play().catch(() => {
        // Autoplay blocked - user needs to interact first
      })
      setIsPlaying(true)
    }
  }, [event.music])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }, [])

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play().catch(() => {})
        setIsPlaying(true)
      }
    }
  }, [isPlaying])

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }, [isMuted])

  if (!event.image) {
    return null
  }

  return (
    <motion.div
      className={`relative aspect-[4/3] w-full max-w-xs md:max-w-sm rounded-2xl overflow-hidden bg-muted cursor-pointer shadow-lg ${
        isAlternate ? "ml-auto" : "mr-auto"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Audio element */}
      {event.music && (
        <audio
          ref={audioRef}
          src={event.music}
          loop
          preload="auto"
        />
      )}

      {/* Image */}
      {!imageError ? (
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          sizes="(max-width: 768px) 280px, 384px"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted text-muted-foreground">
          <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
          <p className="text-sm">Фото не найдено</p>
          <p className="text-xs opacity-60">{event.image}</p>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

      {/* Caption */}
      {event.imageCaption && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-background text-sm font-sans">
                {event.imageCaption}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Music controls */}
      {event.music && (
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <motion.button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </motion.button>
          <AnimatePresence>
            {isPlaying && (
              <motion.button
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isMuted ? "Включить звук" : "Выключить звук"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Music indicator when not hovered */}
      {event.music && !isHovered && (
        <div className="absolute top-3 right-3">
          <div className="w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-primary">
            <Volume2 className="w-4 h-4" />
          </div>
        </div>
      )}
    </motion.div>
  )
}
