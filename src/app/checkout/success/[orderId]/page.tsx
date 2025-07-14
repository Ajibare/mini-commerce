'use client'

import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function CheckoutSuccessPage() {
  const { orderId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-green-50 p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-green-600 mb-8">
            Your order has been placed successfully!
          </p>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
            <div className="space-y-4">
              <div>
                <span className="font-medium">Order ID:</span>
                <span className="ml-2">#{orderId}</span>
              </div>
              <p className="text-gray-600">
                You will receive an email confirmation shortly with your order details.
              </p>
            </div>
          </div>
          <Button
            className="mt-8 bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.location.href = '/'}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
