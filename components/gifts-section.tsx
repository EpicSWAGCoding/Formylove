"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Lock, Sparkles, Heart, Star, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GiftCard {
  id: number
  icon: React.ReactNode
  hint: string
  revealed: boolean
  color: string
}

const initialGifts: GiftCard[] = [
  {
    id: 1,
    icon: <Sparkles className="w-8 h-8" />,
    hint: "Подсказка #1: Что-то, что алмазное...",
    revealed: false,
    color: "from-rose-100 to-pink-100"
  },
  {
    id: 2,
    icon: <Heart className="w-8 h-8" />,
    hint: "Подсказка #2: Это связано с Гарри Поттером...",
    revealed: false,
    color: "from-amber-100 to-orange-100"
  },
  {
    id: 3,
    icon: <Star className="w-8 h-8" />,
    hint: "Подсказка #3: То, что ты очень хотела...",
    revealed: false,
    color: "from-emerald-100 to-teal-100"
  },
  {
    id: 4,
    icon: <PartyPopper className="w-8 h-8" />,
    hint: "Подсказка #4: Главный сюрприз, попробуй отгадай что это?!",
    revealed: false,
    color: "from-violet-100 to-purple-100"
  },
]

export function GiftsSection() {
  const [gifts, setGifts] = useState(initialGifts)
  const [allRevealed, setAllRevealed] = useState(false)

  const revealGift = (id: number) => {
    // Check if previous gifts are revealed
    const giftIndex = gifts.findIndex(g => g.id === id)
    const previousUnrevealed = gifts.slice(0, giftIndex).some(g => !g.revealed)
    
    if (previousUnrevealed) {
      return // Can't reveal this gift yet
    }

    setGifts(prev => {
      const updated = prev.map(gift => 
        gift.id === id ? { ...gift, revealed: true } : gift
      )
      
      if (updated.every(g => g.revealed)) {
        setAllRevealed(true)
      }
      
      return updated
    })
  }

  const canReveal = (id: number) => {
    const giftIndex = gifts.findIndex(g => g.id === id)
    if (giftIndex === 0) return !gifts[0].revealed
    return gifts[giftIndex - 1].revealed && !gifts[giftIndex].revealed
  }

  return (
    <section className="py-20 md:py-32 px-6 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Gift className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Твои Подарки
          </h2>
          <p className="font-sans text-muted-foreground max-w-md mx-auto">
            Открывай подсказки по очереди, чтобы узнать, что тебя ждет
          </p>
        </motion.div>

        {/* Gift cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {gifts.map((gift, index) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`relative h-64 md:h-72 rounded-3xl overflow-hidden transition-all duration-500 ${
                  gift.revealed 
                    ? `bg-gradient-to-br ${gift.color}` 
                    : "bg-secondary"
                }`}
              >
                <AnimatePresence mode="wait">
                  {!gift.revealed ? (
                    <motion.div
                      key="locked"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-background/50 flex items-center justify-center mb-4">
                        {canReveal(gift.id) ? (
                          <Gift className="w-8 h-8 text-primary" />
                        ) : (
                          <Lock className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                      <p className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                        Подарок {gift.id}
                      </p>
                      <p className="font-sans text-sm text-muted-foreground mb-6">
                        {canReveal(gift.id) 
                          ? "Нажми, чтобы открыть" 
                          : "Сначала открой предыдущий"
                        }
                      </p>
                      <Button
                        onClick={() => revealGift(gift.id)}
                        disabled={!canReveal(gift.id)}
                        className="rounded-full px-8"
                        variant={canReveal(gift.id) ? "default" : "secondary"}
                      >
                        {canReveal(gift.id) ? "Открыть" : "Заблокировано"}
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="revealed"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                    >
                      <motion.div
                        initial={{ rotate: -10, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: "spring", damping: 10 }}
                        className="w-16 h-16 rounded-full bg-card/80 flex items-center justify-center mb-4 text-primary"
                      >
                        {gift.icon}
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-serif text-xl md:text-2xl text-foreground leading-relaxed"
                      >
                        {gift.hint}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Sparkle effects for revealed cards */}
                {gift.revealed && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-card rounded-full"
                        initial={{ 
                          x: "50%", 
                          y: "50%", 
                          scale: 0 
                        }}
                        animate={{ 
                          x: `${20 + Math.random() * 60}%`,
                          y: `${20 + Math.random() * 60}%`,
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All revealed message */}
        <AnimatePresence>
          {allRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10, delay: 0.3 }}
                className="inline-block"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    >
                      <Heart className="w-6 h-6 text-primary fill-primary" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <h3 className="font-serif text-2xl md:text-4xl text-foreground mb-4">
                Все подсказки открыты!
              </h3>
              <p className="font-sans text-muted-foreground max-w-md mx-auto">
                Теперь ты знаешь, что тебя ждет. Но самый главный подарок — это наша любовь! 
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
