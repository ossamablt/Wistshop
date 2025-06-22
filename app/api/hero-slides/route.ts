import { NextResponse } from 'next/server'

export async function GET() {
  // Example product object (should match your ProductCard props)
  const sampleProduct = {
    id: 'product-1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 99.99,
    category: 'Electronics',
    image: 'products/headphone.jpg',
    stock: 12,
    colors: ['#000000', '#ffffff'],
  }

  const slides = [
    {
      id: 1,
      title: 'Welcome to Wistshop',
      subtitle: 'Discover amazing products and deals',
      description: 'Shop the latest and greatest products at unbeatable prices.',
      image: '/images/runningShoes.jpg',
      cta: 'Shop Now',
      badge: 'New',
    },
    {
      id: 2,
      title: 'Product Highlight',
      subtitle: 'Featured Product',
      description: '',
      image: '/images/headphone.jpg',
      cta: '',
      badge: 'Recommended',
      product: sampleProduct,
    },
  ]

  return NextResponse.json(slides)
} 