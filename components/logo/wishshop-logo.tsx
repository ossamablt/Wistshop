"use client"

import { motion } from "framer-motion"
import { Star, Heart, Sparkles } from "lucide-react"

interface WishShopLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "full" | "icon" | "text"
  animated?: boolean
  className?: string
}

const sizeClasses = {
  sm: "h-6",
  md: "h-8",
  lg: "h-12",
  xl: "h-16",
}

const textSizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-4xl",
}

export function WishShopLogo({ size = "md", variant = "full", animated = true, className = "" }: WishShopLogoProps) {
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.5 },
    },
    tap: { scale: 0.95 },
  }

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1,
      },
    },
  }

  const LogoIcon = () => (
    <motion.div
      className={`relative ${sizeClasses[size]} aspect-square`}
      variants={animated ? iconVariants : {}}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      {/* Main container with gradient background */}
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-2 shadow-lg">
        {/* Inner content */}
        <div className="relative w-full h-full bg-white rounded-lg flex items-center justify-center overflow-hidden">
          {/* Main wish/star icon */}
          <Star className="w-1/2 h-1/2 text-purple-600 fill-purple-600" />

          {/* Heart accent */}
          <Heart className="absolute top-1 right-1 w-1/4 h-1/4 text-pink-500 fill-pink-500" />

          {/* Animated sparkles */}
          {animated && (
            <>
              <motion.div
                variants={sparkleVariants}
                initial="initial"
                animate="animate"
                className="absolute top-0 left-1 w-1 h-1 bg-yellow-400 rounded-full"
              />
              <motion.div
                variants={sparkleVariants}
                initial="initial"
                animate="animate"
                style={{ animationDelay: "0.5s" }}
                className="absolute bottom-1 right-0 w-1 h-1 bg-blue-400 rounded-full"
              />
              <motion.div
                variants={sparkleVariants}
                initial="initial"
                animate="animate"
                style={{ animationDelay: "1s" }}
                className="absolute top-1/2 left-0 w-1 h-1 bg-pink-400 rounded-full"
              />
            </>
          )}
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-20 blur-sm -z-10" />
      </div>
    </motion.div>
  )

  const LogoText = () => (
    <motion.div
      className={`font-bold ${textSizeClasses[size]} bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent`}
      initial={animated ? { opacity: 0, x: -20 } : {}}
      animate={animated ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <span className="relative">
        Wish
        <span className="text-pink-500">Shop</span>
        {animated && (
          <motion.div
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
            }}
            className="absolute -top-1 -right-2"
          >
            <Sparkles className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          </motion.div>
        )}
      </span>
    </motion.div>
  )

  if (variant === "icon") {
    return (
      <div className={className}>
        <LogoIcon />
      </div>
    )
  }

  if (variant === "text") {
    return (
      <div className={className}>
        <LogoText />
      </div>
    )
  }

  return (
    <motion.div
      className={`flex items-center space-x-3 ${className}`}
      initial={animated ? { opacity: 0, y: -10 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <LogoIcon />
      <LogoText />
    </motion.div>
  )
}
