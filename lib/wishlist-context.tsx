"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { Product } from "@/services/products"

interface WishlistContextType {
  items: Product[]
  addToWishlist: (item: Product) => void
  removeFromWishlist: (itemId: string) => void
  isWishlisted: (itemId: string) => boolean
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("wishlist")
    if (saved) setItems(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(items))
  }, [items])

  const addToWishlist = (item: Product) => {
    setItems((current) => (current.find((i) => i.id === item.id) ? current : [...current, item]))
  }

  const removeFromWishlist = (itemId: string) => {
    setItems((current) => current.filter((item) => item.id !== itemId))
  }

  const isWishlisted = (itemId: string) => {
    return items.some((item) => item.id === itemId)
  }

  const clearWishlist = () => setItems([])

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isWishlisted, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
} 