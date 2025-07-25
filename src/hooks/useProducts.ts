'use client';

import { useQuery } from '@tanstack/react-query';
import { products } from '@/data/products';
import { Product } from '@/types';

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () =>
      products.map((product) => ({
        ...product,
        id: String(product.id), // ✅ convert ID to string
      })),
    staleTime: Infinity,
    
  });
};

export const useProduct = (slug: string) => {
  return useQuery<Product>({
    queryKey: ['product', slug],
    queryFn: () => {
      const product = products.find((p) => p.slug === slug);
      if (!product) throw new Error('Product not found');

      return {
        ...product,
        id: String(product.id), // ✅ convert ID to string here too
      };
    },
    staleTime: Infinity,
  });
};

// 'use client';

// import { useQuery } from '@tanstack/react-query';
// import { products } from '@/data/products';
// import { Product } from '@/types';

// export const useProducts = () => {
//   return useQuery<Product[]>({
//     queryKey: ['products'],
//     queryFn: async () => {
//       return products.map((product) => ({
//         ...product,
//         id: String(product.id), // just in case some are numbers
//       }));
//     },
//     staleTime: Infinity,
//   });
// };

// export const useProduct = (slug: string) => {
//   return useQuery<Product>({
//     queryKey: ['product', slug],
//     queryFn: async () => {
//       const product = products.find((p) => p.slug === slug);
//       if (!product) throw new Error('Product not found');

//       return {
//         ...product,
//         id: String(product.id), // same here
//       };
//     },
//     staleTime: Infinity,
//   });
// };
