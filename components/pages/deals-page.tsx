"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Flame, Gift, Percent, Star, Zap } from "lucide-react"
import { UpdatedHeader } from "@/components/layout/updated-header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product/product-card"
import { products } from "@/lib/mock-data"

export function DealsPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const saleProducts = products.filter((p) => p.tags.includes("Sale"))
  const featuredDeals = saleProducts.slice(0, 4)
  const flashDeals = saleProducts.slice(0, 6)
  const dailyDeals = saleProducts.slice(2, 8)

  const dealCategories = [
    {
      icon: Zap,
      title: "Flash Sale",
      description: "Limited time offers",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900",
      count: "12 deals",
    },
    {
      icon: Gift,
      title: "Bundle Deals",
      description: "Save more with bundles",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900",
      count: "8 bundles",
    },
    {
      icon: Percent,
      title: "Clearance",
      description: "Up to 70% off",
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900",
      count: "25 items",
    },
    {
      icon: Star,
      title: "Member Exclusive",
      description: "Special member prices",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900",
      count: "15 deals",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <UpdatedHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <Badge variant="secondary" className="mb-4 bg-white text-red-600">
                <Flame className="w-3 h-3 mr-1" />
                Hot Deals
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Mega Sale Event</h1>
              <p className="text-xl mb-8 opacity-90">Save up to 70% on your favorite products. Limited time only!</p>

              {/* Countdown Timer */}
              <div className="flex justify-center items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-white text-red-600 rounded-lg p-4 min-w-[80px]">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <p className="text-sm mt-2 opacity-90">Hours</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-white text-red-600 rounded-lg p-4 min-w-[80px]">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <p className="text-sm mt-2 opacity-90">Minutes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-white text-red-600 rounded-lg p-4 min-w-[80px]">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <p className="text-sm mt-2 opacity-90">Seconds</p>
                </div>
              </div>

              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                Shop Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Deal Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Deal Categories</h2>
              <p className="text-lg text-muted-foreground">Choose your favorite type of savings</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dealCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.bgColor} flex items-center justify-center`}
                      >
                        <category.icon className={`h-8 w-8 ${category.color}`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{category.description}</p>
                      <Badge variant="outline">{category.count}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Deals */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Deals</h2>
              <p className="text-lg text-muted-foreground">Hand-picked deals you don't want to miss</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDeals.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deal Tabs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="flash" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
                <TabsTrigger value="flash">Flash Deals</TabsTrigger>
                <TabsTrigger value="daily">Daily Deals</TabsTrigger>
                <TabsTrigger value="weekend">Weekend Special</TabsTrigger>
              </TabsList>

              <TabsContent value="flash">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">⚡ Flash Deals</h3>
                  <p className="text-muted-foreground">Limited quantity, limited time!</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                  {flashDeals.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card className="relative overflow-hidden">
                        <div className="absolute top-2 left-2 z-10">
                          <Badge variant="destructive" className="animate-pulse">
                            Flash Sale
                          </Badge>
                        </div>
                        <ProductCard product={product} index={index} />
                        <div className="p-4 border-t">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Stock left:</span>
                            <span className="text-sm font-semibold">12 items</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="daily">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">🌅 Daily Deals</h3>
                  <p className="text-muted-foreground">New deals every day</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dailyDeals.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="weekend">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">🎉 Weekend Special</h3>
                  <p className="text-muted-foreground">Extra savings for the weekend</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {saleProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss a Deal</h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to get notified about flash sales and exclusive offers
              </p>
              <Button size="lg" variant="secondary">
                Subscribe for Deal Alerts
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
