import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  productId: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (productId: string) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (productId) => set((state) => ({
        items: state.items.some(item => item.productId === productId)
          ? state.items.map(item => 
              item.productId === productId 
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.items, { productId, quantity: 1 }]
      })),
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(item => item.productId !== productId)
      })),
      updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map(item =>
          item.productId === productId
            ? { ...item, quantity }
            : item
        )
      })),
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'cart-storage'
    }
  )
) 