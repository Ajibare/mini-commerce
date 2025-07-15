'use client'

import { Product } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useProducts } from '@/hooks/useProducts';

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { slug } = params;
  const { data: products, isLoading, error } = useProducts();
  const { addItem } = useCartStore();
  const [product, setProduct] = useState<Product | null>(null);

  // useEffect(() => {
  //   if (products) {
  //     const foundProduct = products.find(p => p.slug === slug);
  //     setProduct(foundProduct || null);
  //   }
  // }, [products, slug]);
  useEffect(() => {
    if (Array.isArray(products)) {
      const foundProduct = products.find((p) => p.slug === slug);
      setProduct(foundProduct || null);
    }
  }, [products, slug]);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600">We couldn't find the product you were looking for.</p>
        <Button className="mt-4" onClick={() => window.history.back()}>
          Back to Products
        </Button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        <Button className="mt-4" onClick={() => window.history.back()}>
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-800 mb-4">${product.price.toFixed(2)}</p>
          <div className="space-y-4 mb-8">
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Category:</span>
              <span className="text-gray-800 font-semibold">{product.category}</span>
            </div>
          </div>
          <Button
            onClick={() => addItem(product, 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
