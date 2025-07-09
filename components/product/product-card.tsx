"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/services/products"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { getProductImagePath } from "@/services/products"
import { useWishlist } from "@/lib/wishlist-context"
import { useRouter } from "next/navigation"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist()
  const router = useRouter()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: product.id!,
      name: product.name,
      price: product.price,
      imageUrl: product.image,
      quantity: 1,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (isWishlisted(product.id!)) {
      removeFromWishlist(product.id!)
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      })
    } else {
      addToWishlist(product)
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      })
      // Animation will be handled in the header
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`}>
        <Card className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
          <div className="relative overflow-hidden">
            {/* Product Image */}
            <div className="aspect-square relative bg-gray-100">
              <Image
                src={getProductImagePath(product.image)}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg"
                }}
              />

              {/* Overlay Actions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 bg-black/20 flex items-center justify-center space-x-2"
              >
                <Button size="icon" variant="secondary" className="rounded-full" onClick={handleAddToCart}>
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Eye className="h-4 w-4" />
                </Button>
              </motion.div>

              {/* Wishlist Button */}
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white"
                onClick={handleWishlist}
              >
                <Heart className={`h-4 w-4 ${isWishlisted(product.id!) ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
              </Button>

              {/* Color Swatches */}
              {product.colors && product.colors.length > 0 && (
                <div className="absolute bottom-2 left-2 flex space-x-1">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded-full border border-white shadow-sm"
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <CardContent className="p-4">
              <div className="space-y-2">
                {/* Category */}
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</p>

                {/* Product Name */}
                <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                </div>

                {/* Stock Status */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                    {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
                  </span>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
