'use client'

import { Product } from '@/mocks/products'
import { useCartStore } from '@/store/cart'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const addItem = useCartStore((state) => state.addItem)

  useEffect(() => {
    if (videoRef.current) {
      if (isHovering) {
        videoRef.current.play().catch(() => {
          console.log('Autoplay failed')
        })
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isHovering])

  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link href={`/products/${product.id}`} className="flex-1 flex flex-col">
        {/* Image/Video Container - Fixed height */}
        <div className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-700">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isHovering && product.videoUrl ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {product.videoUrl && (
            <video 
              ref={videoRef}
              src={product.videoUrl}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isHovering && !isVideoLoading ? 'opacity-100' : 'opacity-0'
              }`}
              preload="auto"
              muted
              loop
              playsInline
              onLoadedData={() => setIsVideoLoading(false)}
            />
          )}
          
          <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg">
            <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Content Container - Fixed height with flex */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Title - Fixed height with line clamp */}
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h2>
          
          {/* Info Section - Fixed layout */}
          <div className="mt-auto space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{product.seller}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.stock > 0 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
              }`}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Button - Fixed position at bottom */}
      <div className="p-5 pt-0">
        <button
          onClick={(e) => {
            e.preventDefault()
            product.stock > 0 && addItem(product.id)
          }}
          disabled={product.stock === 0}
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 
                   text-white rounded-lg transition-colors duration-200 
                   flex items-center justify-center gap-2"
        >
          <span>{product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}</span>
          {product.stock > 0 && <span>+</span>}
        </button>
      </div>
    </div>
  )
} 