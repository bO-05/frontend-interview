import { mockProducts } from '../../../mocks/products'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Get query params
    const search = searchParams.get('search')
    const category = searchParams.get('category')
    const seller = searchParams.get('seller')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const rating = searchParams.get('rating')
    const inStock = searchParams.get('inStock')
    const sort = searchParams.get('sort')
    const direction = searchParams.get('direction')
    const cursor = searchParams.get('cursor')
    const limit = Number(searchParams.get('limit')) || 10

    let filteredProducts = [...mockProducts]

    // Apply filters
    if (search) {
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category) {
      filteredProducts = filteredProducts.filter(p => p.category === category)
    }

    if (seller) {
      filteredProducts = filteredProducts.filter(p => p.seller === seller)
    }

    if (minPrice) {
      filteredProducts = filteredProducts.filter(p => p.price >= Number(minPrice))
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter(p => p.price <= Number(maxPrice))
    }

    if (rating) {
      filteredProducts = filteredProducts.filter(p => p.rating >= Number(rating))
    }

    if (inStock === 'true') {
      filteredProducts = filteredProducts.filter(p => p.stock > 0)
    }

    // Apply sorting
    if (sort) {
      filteredProducts.sort((a, b) => {
        const multiplier = direction === 'desc' ? -1 : 1
        if (sort === 'price') {
          return (a.price - b.price) * multiplier
        }
        if (sort === 'rating') {
          return (a.rating - b.rating) * multiplier
        }
        if (sort === 'seller') {
          return (a.rating - b.rating) * multiplier
        }
        return 0
      })
    }

    // Apply pagination
    const startIndex = cursor ? Number(cursor) : 0
    const endIndex = startIndex + limit
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex)
    const nextCursor = endIndex < filteredProducts.length ? String(endIndex) : undefined

    return NextResponse.json({
      products: paginatedProducts,
      nextCursor
    })

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
} 