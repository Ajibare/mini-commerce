'use client';

import { useCartStore } from '@/store/cartStore';
import { CartItem } from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { formatCurrency } from '@/lib/utils';

export default function CartPage() {
  const { items, clearCart } = useCartStore();
  const router = useRouter();
  const cartItems = Object.values(items);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-4">Add items to your cart to proceed with checkout.</p>
        <Button onClick={() => router.push('/')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-3 space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-black rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-300">Subtotal</span>
              <span className="text-white">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Shipping</span>
              <span className="text-white">{formatCurrency(shipping)}</span>
            </div>
            <div className="border-t border-gray-800 pt-4">
              <div className="flex justify-between font-semibold">
                <span className="text-white">Total</span>
                <span className="text-white">{formatCurrency(total)}</span>
              </div>
            </div>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4" 
              onClick={() => router.push('/checkout')}
            >
              Proceed to Checkout
            </Button>
            <Button
              variant="destructive"
              className="w-full mt-2"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
