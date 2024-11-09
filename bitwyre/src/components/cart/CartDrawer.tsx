'use client'

import { useCartStore } from '@/store/cart'
import { mockProducts } from '@/mocks/products'
import { useState } from 'react'

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()

  const cartItems = items.map(item => ({
    ...item,
    product: mockProducts.find(p => p.id === item.productId)!
  }))

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="text-xl">🛒</span>
        {items.length > 0 && (
          <span 
            data-testid="cart-badge"
            className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
          >
            {totalItems}
          </span>
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Cart Panel */}
      <div
        className={`fixed right-0 top-0 h-screen w-full sm:w-96 bg-white dark:bg-gray-800 shadow-xl z-[100] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="border-b dark:border-gray-700">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Shopping Cart</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <span className="text-gray-500 dark:text-gray-400 text-lg">✕</span>
            </button>
          </div>
        </div>

        {/* Cart Content */}
        <div className="h-[calc(100vh-180px)] overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
              <span className="text-4xl mb-4">🛒</span>
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm">Add some products to your cart</p>
            </div>
          ) : (
            <div className="divide-y dark:divide-gray-700">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ${product.price.toFixed(2)} × {quantity}
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Subtotal: ${(product.price * quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          disabled={quantity <= 1}
                          className="p-1 rounded border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 
                                   text-gray-900 dark:text-gray-100 disabled:opacity-50"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-gray-900 dark:text-gray-100">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          disabled={quantity >= product.stock}
                          className="p-1 rounded border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 
                                   text-gray-900 dark:text-gray-100 disabled:opacity-50"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="ml-auto text-red-500 hover:text-red-700 dark:hover:text-red-400"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-900 dark:text-gray-100">Total:</span>
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  ${total.toFixed(2)}
                </span>
              </div>
              <button
                onClick={clearCart}
                className="w-full py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg 
                         transition-colors flex items-center justify-center gap-2"
              >
                <span>Clear Cart</span>
                <span>🗑️</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
} 