'use client';

import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/ProductCard';
import { SearchBar } from '@/components/Search';
import { CartIcon } from '@/components/CartIcon';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { useState } from 'react';

export default function Home() {
  const { data: products, isLoading, error } = useProducts();
  const { items } = useCartStore();
  const [searchResults, setSearchResults] = useState<Product[] | null>(null);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-lg h-64 w-full"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p className="text-red-500">Failed to load products</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Mini-Commerce</h1>
          <div className="flex items-center space-x-4">
            <SearchBar onSearch={setSearchResults} />
            <CartIcon />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {(searchResults || products).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mini-Commerce. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
