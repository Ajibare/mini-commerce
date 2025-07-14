'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { items, subtotal, total } = useCartStore();

  useEffect(() => {
    // Persist cart data to localStorage
    localStorage.setItem('cart', JSON.stringify(items));
    localStorage.setItem('cartSubtotal', subtotal.toString());
    localStorage.setItem('cartTotal', total.toString());
  }, [items, subtotal, total]);

  return <>{children}</>;
}
