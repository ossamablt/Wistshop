"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
  badge: string
}

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchHeroSlides = async () => {
      try {
        setIsLoading(true)
        // Replace with your actual API endpoint
        const response = await fetch('/api/hero-slides')
        const data = await response.json()
        setHeroSlides(data)
      } catch (error) {
        console.error('Error fetching hero slides:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchHeroSlides()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  if (isLoading || heroSlides.length === 0) {
    return (
      <section className="relative h-[600px] bg-muted/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading hero content...</p>
        </div>
      </section>
    )
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <img
              src={currentSlideData.image}
              alt={currentSlideData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              {currentSlideData.badge}
            </Badge>
          </motion.div>

          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {currentSlideData.title}
          </motion.h1>

          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-white/90 mb-8"
          >
            {currentSlideData.subtitle}
          </motion.p>

          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              {currentSlideData.cta}
              <ShoppingBag className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
