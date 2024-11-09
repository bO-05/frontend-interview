import { Product } from '@/mocks/products'
import { useInfiniteQuery } from '@tanstack/react-query'

interface UseProductsProps {
  search?: string
  category?: string
  seller?: string
  minPrice?: number
  maxPrice?: number
  rating?: number
  inStock?: boolean
  sort?: 'price' | 'rating' | 'seller'
  direction?: 'asc' | 'desc'
}

interface ProductsResponse {
  products: Product[]
  nextCursor?: string
}

export function useProducts({
  search,
  category,
  seller,
  minPrice,
  maxPrice,
  rating,
  inStock,
  sort,
  direction,
}: UseProductsProps = {}) {
  return useInfiniteQuery<ProductsResponse>({
    queryKey: ['products', { search, category, seller, minPrice, maxPrice, rating, inStock, sort, direction }],
    initialPageParam: 0,
    queryFn: async ({ pageParam }) => {
      const params = new URLSearchParams()
      
      if (search) params.set('search', search)
      if (category) params.set('category', category)
      if (seller) params.set('seller', seller)
      if (minPrice) params.set('minPrice', String(minPrice))
      if (maxPrice) params.set('maxPrice', String(maxPrice))
      if (rating) params.set('rating', String(rating))
      if (inStock) params.set('inStock', String(inStock))
      if (sort) params.set('sort', sort)
      if (direction) params.set('direction', direction)
      if (pageParam) params.set('cursor', String(pageParam))
      
      try {
        const response = await fetch(`/api/products?${params.toString()}`)
        if (!response.ok) throw new Error('Failed to fetch products')
        
        return response.json()
      } catch (error) {
        console.error('API Error:', error)
        throw error
      }
    },
    getNextPageParam: (lastPage: ProductsResponse) => lastPage.nextCursor,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
  })
} 