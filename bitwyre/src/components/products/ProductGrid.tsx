'use client'

import { useProducts } from '@/hooks/use-products'
import { useSearchStore } from '@/store/search'
import { useFilterStore } from '@/store/filter'
import { ProductCard } from './ProductCard'
import { Product } from '@/mocks/products'

export function ProductGrid() {
  const search = useSearchStore((state) => state.search)
  const filters = useFilterStore()
  
  const { 
    data, 
    fetchNextPage, 
    hasNextPage, 
    isLoading, 
    isError 
  } = useProducts({ 
    search,
    category: filters.category,
    seller: filters.seller,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    rating: filters.rating,
    inStock: filters.inStock,
    sort: filters.sort,
    direction: filters.direction
  })

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100" />
    </div>
  )
  
  if (isError) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="text-red-500 dark:text-red-400 mb-4" data-testid="error-message">
        Failed to load products
      </div>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        data-testid="retry-button"
      >
        Try Again
      </button>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.pages.map((page) =>
          page.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
      {hasNextPage && (
        <div className="text-center mt-8">
          <button
            onClick={() => fetchNextPage()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  )
} 