"use client"

import { useWishlist } from "@/lib/wishlist-context"
import { ProductCard } from "@/components/product/product-card"
import { useRouter } from "next/navigation"

export default function WishlistPage() {
  const { items } = useWishlist()
  const router = useRouter()

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <button
          onClick={() => router.back()}
          className="mr-4 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm font-medium"
        >
          ← Return
        </button>
        <h1 className="text-3xl font-bold">Your Wishlist</h1>
      </div>
      {items.length === 0 ? (
        <p className="text-muted-foreground">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      )}
    </div>
  )
} 