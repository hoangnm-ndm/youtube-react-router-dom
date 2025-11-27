// src/common/queryClient.ts
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 15,
    },
    mutations: {
      retry: 0,
    },
  },
});

export default queryClient;
