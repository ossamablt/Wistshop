export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  brand: string
  rating: number
  reviewCount: number
  inStock: boolean
  tags: string[]
  colors?: string[]
  sizes?: string[]
  features?: string[]
}

export interface CartItem {
  product: Product
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Category {
  id: string
  name: string
  image: string
  productCount: number
}

export interface Filter {
  categories: string[]
  brands: string[]
  priceRange: [number, number]
  rating: number
  inStock: boolean
}
