"use client"

import { motion } from "framer-motion"
import { WishShopLogo } from "./wishshop-logo"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function LogoShowcase() {
  const logoVariations = [
    {
      title: "Full Logo - Large",
      description: "Perfect for headers and main branding",
      component: <WishShopLogo size="xl" variant="full" />,
    },
    {
      title: "Full Logo - Medium",
      description: "Standard size for navigation",
      component: <WishShopLogo size="lg" variant="full" />,
    },
    {
      title: "Icon Only - Large",
      description: "Great for favicons and app icons",
      component: <WishShopLogo size="xl" variant="icon" />,
    },
    {
      title: "Icon Only - Small",
      description: "Perfect for buttons and small spaces",
      component: <WishShopLogo size="sm" variant="icon" />,
    },
    {
      title: "Text Only",
      description: "Clean text version for minimal designs",
      component: <WishShopLogo size="lg" variant="text" />,
    },
    {
      title: "Static Version",
      description: "Non-animated for performance-critical areas",
      component: <WishShopLogo size="lg" variant="full" animated={false} />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950 dark:via-pink-950 dark:to-blue-950 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Brand Identity
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              WishShop
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern, magical logo design that captures the essence of wish fulfillment through shopping
          </p>
        </motion.div>

        {/* Hero Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <WishShopLogo size="xl" variant="full" />

            {/* Floating elements around logo */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-70"
            />

            <motion.div
              animate={{
                y: [0, 8, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-60"
            />
          </div>
        </motion.div>

        {/* Logo Variations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {logoVariations.map((variation, index) => (
            <motion.div
              key={variation.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{variation.title}</CardTitle>
                  <CardDescription>{variation.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center py-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-b-lg">
                  {variation.component}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Design Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-purple-600">Magical</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The star and sparkle elements evoke the magic of wishes coming true through shopping
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-pink-600">Emotional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The heart symbol represents the emotional connection customers have with their desired products
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-blue-600">Modern</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Clean gradients and smooth animations create a contemporary, tech-forward brand identity
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Color Palette */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
              <CardDescription>The magical gradient palette that defines WishShop</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-full h-16 bg-purple-500 rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">Purple</p>
                  <p className="text-xs text-muted-foreground">#8B5CF6</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-16 bg-pink-500 rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">Pink</p>
                  <p className="text-xs text-muted-foreground">#EC4899</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-16 bg-blue-500 rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">Blue</p>
                  <p className="text-xs text-muted-foreground">#3B82F6</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-16 bg-yellow-400 rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">Yellow</p>
                  <p className="text-xs text-muted-foreground">#FBBF24</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg mb-2"></div>
                  <p className="text-sm font-medium">Gradient</p>
                  <p className="text-xs text-muted-foreground">Primary</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
