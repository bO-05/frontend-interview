'use client'

import { mockProducts } from '@/mocks/products'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { useCartStore } from '@/store/cart'

export default function ProductPage() {
  const { id } = useParams()
  const product = mockProducts.find(p => p.id === id)
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const addItem = useCartStore((state) => state.addItem)

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-center text-red-500 dark:text-red-400">
          Product not found
        </div>
      </div>
    )
  }

  // Combine images and video into media array
  const mediaItems = [...product.images, ...(product.videoUrl ? [product.videoUrl] : [])]

  const goNext = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length)
  }

  const goPrev = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

  const isVideo = product.videoUrl && currentMediaIndex === mediaItems.length - 1

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Media Section */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
            {/* Navigation Arrows */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 z-10"
            >
              ←
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 z-10"
            >
              →
            </button>

            {/* Media Display */}
            {isVideo ? (
              <>
                <video 
                  src={product.videoUrl}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    isVideoLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  onLoadedData={() => setIsVideoLoading(false)}
                />
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    isVideoLoading ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </>
            ) : (
              <img 
                src={mediaItems[currentMediaIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            )}

            {/* Media Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMediaIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentMediaIndex === index 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {product.name}
          </h1>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-2xl">★</span>
              <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {product.rating}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Seller</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {product.seller}
              </span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Category</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {product.category}
              </span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Stock</span>
              <span className={`font-medium ${
                product.stock > 0 
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {product.stock > 0 ? `${product.stock} units` : 'Out of Stock'}
              </span>
            </div>
          </div>

          <button
            onClick={() => product.stock > 0 && addItem(product.id)}
            disabled={product.stock === 0}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 
                     text-white rounded-lg transition-colors duration-200 
                     flex items-center justify-center gap-2 text-lg"
          >
            <span>{product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}</span>
            {product.stock > 0 && <span>+</span>}
          </button>
        </div>
      </div>
    </div>
  )
} 