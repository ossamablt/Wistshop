"use client"

import { motion } from "framer-motion"
import { Bot, Sparkles, TrendingUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AIRecommendations() {
  const aiFeatures = [
    {
      icon: Bot,
      title: "Smart Recommendations",
      description: "AI analyzes your browsing and purchase history to suggest products you'll love",
      badge: "AI Powered",
    },
    {
      icon: TrendingUp,
      title: "Trend Predictions",
      description: "Stay ahead with AI-predicted trends and upcoming popular products",
      badge: "Trending",
    },
    {
      icon: Heart,
      title: "Personalized Experience",
      description: "Every interaction helps our AI understand your preferences better",
      badge: "Personal",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            AI Technology
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shopping Made <span className="gradient-text">Smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of e-commerce with our AI-powered features designed to enhance your shopping journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <Badge variant="outline" className="mb-2 w-fit mx-auto">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-r from-blue-500/10 to-purple-600/10">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">AI Shopping Assistant</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Get instant help finding products, comparing options, and making decisions with our intelligent shopping
                assistant.
              </p>
              <Button size="lg" className="group">
                <Bot className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Try AI Assistant
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
