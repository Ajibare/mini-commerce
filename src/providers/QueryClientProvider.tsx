'use client';

import { QueryClient, QueryClientProvider as RQProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

export function AppQueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <RQProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </RQProvider>
  );
}
