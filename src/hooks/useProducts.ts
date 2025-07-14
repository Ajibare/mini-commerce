'use client';

import { useQuery } from '@tanstack/react-query';
import { products } from '@/data/products';
// import { Product } from '@/types';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => products,
    staleTime: Infinity,
  });
};

export const useProduct = (slug: string) => {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: () => {
      const product = products.find((p) => p.slug === slug);
      if (!product) throw new Error('Product not found');
      return product;
    },
    staleTime: Infinity,
  });
};

