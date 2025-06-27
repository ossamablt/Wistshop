import { NextResponse } from 'next/server'
import { getProducts } from '@/services/products'

export async function GET() {
  try {
    // Get all products to calculate real stats
    const products = await getProducts()
    
    // Calculate total products
    const totalProducts = products.length
    
    // Calculate total customers (this could be enhanced with real user data later)
    const totalCustomers = 1500 // Placeholder - could be fetched from users collection
    
    // Calculate satisfaction rate (placeholder - could be calculated from reviews)
    const satisfactionRate = 98 // Placeholder - could be calculated from actual reviews
    
    return NextResponse.json({
      totalProducts,
      totalCustomers,
      satisfactionRate
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
} 