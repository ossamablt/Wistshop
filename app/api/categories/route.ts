import { NextResponse } from 'next/server'
import { getProducts } from '@/services/products'

// Map categories to available images
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

export async function GET() {
  try {
    // Get all products to calculate category stats
    const products = await getProducts()
    
    // Group products by category and count them
    const categoryCounts = products.reduce((acc, product) => {
      const category = product.category
      acc[category] = (acc[category] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    // Create categories with real product counts
    const categories = Object.entries(categoryCounts).map(([name, productCount], index) => ({
      id: `category-${index + 1}`,
      name,
      productCount,
      image: categoryImageMap[name] || '/images/ii.png' // Use mapped image or fallback
    }))
    
    return NextResponse.json(categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    )
  }
} 