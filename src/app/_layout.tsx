import { QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";

import { queryClient } from "~/lib/api";

import "~/styles/global.css";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}
