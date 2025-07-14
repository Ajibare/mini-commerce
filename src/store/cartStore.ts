import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: Record<string, CartItem>;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  total: number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: {},

      addItem: (product, quantity = 1) => {
        if (quantity <= 0) {
          throw new Error('Quantity must be greater than 0');
        }

        set((state) => {
          const existingItem = state.items[product.id];
          if (existingItem) {
            return {
              items: {
                ...state.items,
                [product.id]: {
                  ...existingItem,
                  quantity: existingItem.quantity + quantity,
                },
              },
            };
          }
          return {
            items: {
              ...state.items,
              [product.id]: {
                product,
                quantity,
              },
            },
          };
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: Object.entries(state.items)
            .filter(([id]) => id !== productId)
            .reduce((acc, [id, item]) => ({ ...acc, [id]: item }), {}),
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          throw new Error('Quantity must be greater than 0');
        }

        set((state) => {
          const existingItem = state.items[productId];
          if (!existingItem) {
            throw new Error('Item not found in cart');
          }

          return {
            items: {
              ...state.items,
              [productId]: {
                ...existingItem,
                quantity,
              },
            },
          };
        });
      },

      clearCart: () => {
        set({ items: {} });
      },

      get subtotal() {
        const state = get();
        return Object.values(state.items)
          .reduce((total, item) => total + item.product.price * item.quantity, 0);
      },

      get total() {
        const state = get();
        return state.subtotal;
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
