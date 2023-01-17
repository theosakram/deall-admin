import type { PropsWithChildren } from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
      cacheTime: 3 * 60 * 1000, // 3 menit
    },
  },
});

export const QueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
