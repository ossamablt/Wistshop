"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const heroSlides = [
  {
    id: 1,
    title: "AI-Powered Shopping Experience",
    subtitle: "Discover products tailored just for you",
    description: "Our advanced AI algorithms learn your preferences to recommend the perfect products.",
    image: "/images/runningShoes.jpg",
    cta: "Explore AI Picks",
    badge: "New Technology",
  },
  {
    id: 2,
    title: "Summer Collection 2025",
    subtitle: "Fresh styles for the new season",
    description: "Discover the latest trends and must-have items for summer 2025.",
    image: "/images/headphone.jpg",
    cta: "Shop Collection",
    badge: "Limited Time",
  },
  {
    id: 3,
    title: "Electronics Mega Sale",
    subtitle: "Up to 70% off on premium gadgets",
    description: "Upgrade your tech with incredible deals on smartphones, laptops, and more.",
    image: "/images/Smartwatch.jpg",
    cta: "Shop Electronics",
    badge: "Save Big",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Badge variant="secondary" className="mb-4">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {heroSlides[currentSlide].badge}
                  </Badge>
                </motion.div>

                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl md:text-6xl font-bold leading-tight"
                  >
                    <span className="gradient-text">{heroSlides[currentSlide].title}</span>
                  </motion.h1>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-xl md:text-2xl text-muted-foreground"
                  >
                    {heroSlides[currentSlide].subtitle}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-lg text-muted-foreground max-w-md"
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button size="lg" className="group">
                    <ShoppingBag className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    {heroSlides[currentSlide].cta}
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-lg mx-auto">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                      backgroundImage: `url(${heroSlides[currentSlide].image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80"
                  />

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      x: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-70"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </section>
  )
}
