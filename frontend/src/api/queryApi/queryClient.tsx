import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000,
    },
    mutations: {
      onError: (error) => {
        console.error("Mutation error:", error);
      },
    },
  },
});
