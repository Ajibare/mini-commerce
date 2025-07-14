'use client';

import { QueryClient, QueryClientProvider as RQProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CartProvider } from './CartProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RQProvider client={queryClient}>
      <CartProvider>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </CartProvider>
    </RQProvider>
  );
}
