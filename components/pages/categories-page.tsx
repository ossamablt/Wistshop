"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, TrendingUp, Package, Users } from "lucide-react"
import { UpdatedHeader } from "@/components/layout/updated-header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProducts } from "@/services/products"
import type { Product } from "@/services/products"

interface Category {
  id: string
  name: string
  productCount: number
  image: string
}

export function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCustomers: 0,
    satisfactionRate: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // Fetch products directly from Firebase like the products page does
        const products = await getProducts()
        
        // Calculate total products
        const totalProducts = products.length
        
        // Group products by category and count them
        const categoryCounts = products.reduce((acc, product) => {
          const category = product.category
          acc[category] = (acc[category] || 0) + 1
          return acc
        }, {} as Record<string, number>)
        
        // Create categories with real product counts
        const categoriesData = Object.entries(categoryCounts).map(([name, productCount], index) => ({
          id: `category-${index + 1}`,
          name,
          productCount,
          image: getCategoryImage(name)
        }))
        
        setCategories(categoriesData)
        setStats({
          totalProducts,
          totalCustomers: 1500, // Placeholder - could be enhanced with real user data
          satisfactionRate: 98 // Placeholder - could be calculated from actual reviews
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Helper function to get category image based on available images
  const getCategoryImage = (categoryName: string): string => {
    const categoryImageMap: Record<string, string> = {
      'Electronics': '/images/ii.png',
      'Smartwatch': '/images/Smartwatch.jpg',
      'Smart Watch': '/images/Smart watch1.jpg',
      'Headphones': '/images/headphones.jpg',
      'Headphone': '/images/headphone.jpg',
      'Running Shoes': '/images/runningShoes.jpg',
      'Sports': '/images/runningShoes2.jpg',
      'Clothing': '/images/runningShoes.jpg',
      'Books': '/images/ii.png',
      'Home & Garden': '/images/ii.png',
      'Beauty': '/images/ii.png',
      'Toys': '/images/ii.png',
      'Other': '/images/ii.png'
    }
    
    return categoryImageMap[categoryName] || '/images/ii.png'
  }

  const featuredCategories = categories.slice(0, 3)
  const allCategories = categories

  const categoryStats = [
    {
      icon: Package,
      title: `${stats.totalProducts.toLocaleString()}+`,
      description: "Total Products",
      color: "text-blue-600",
    },
    {
      icon: Users,
      title: `${stats.totalCustomers.toLocaleString()}+`,
      description: "Happy Customers",
      color: "text-green-600",
    },
    {
      icon: TrendingUp,
      title: `${stats.satisfactionRate}%`,
      description: "Satisfaction Rate",
      color: "text-purple-600",
    },
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Loading categories...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <UpdatedHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950 dark:via-pink-950 dark:to-blue-950 py-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Explore Categories
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Shop by{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Category
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our carefully curated collections across different categories. From electronics to fashion,
                find everything you wish for in one place.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {categoryStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center border-0 shadow-lg">
                    <CardContent className="p-6">
                      <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                      <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                      <p className="text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Categories</h2>
              <p className="text-lg text-muted-foreground">Most popular categories this month</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link href={`/products?category=${category.name.toLowerCase()}`}>
                    <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                          <p className="text-sm opacity-90 mb-4">{category.productCount} products available</p>
                          <Button
                            variant="secondary"
                            size="sm"
                            className="group-hover:bg-white group-hover:text-black transition-colors"
                          >
                            Explore Now
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Categories Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Categories</h2>
              <p className="text-lg text-muted-foreground">Browse our complete collection</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {allCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/products?category=${category.name.toLowerCase()}`}>
                    <Card className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="aspect-square relative overflow-hidden">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                            <p className="text-xs opacity-90">{category.productCount} items</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let our AI assistant help you discover the perfect products for your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Ask AI Assistant
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-purple-600"
                >
                  Browse All Products
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
