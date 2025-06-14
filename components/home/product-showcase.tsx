"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "@/components/product/product-card"
import type { Product } from "@/lib/types"

export function ProductShowcase() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [newProducts, setNewProducts] = useState<Product[]>([])
  const [saleProducts, setSaleProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [featuredRes, newRes, saleRes] = await Promise.all([
          fetch('/api/products/featured'),
          fetch('/api/products/new'),
          fetch('/api/products/sale')
        ])

        const [featuredData, newData, saleData] = await Promise.all([
          featuredRes.json(),
          newRes.json(),
          saleRes.json()
        ])

        setFeaturedProducts(featuredData)
        setNewProducts(newData)
        setSaleProducts(saleData)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground">Discover our handpicked selection</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">New Arrivals</h2>
          <p className="text-lg text-muted-foreground">Check out our latest products</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newProducts.map((product, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
          <p className="text-lg text-muted-foreground">Don't miss out on these deals</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {saleProducts.map((product, index) => (
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
  )
}
