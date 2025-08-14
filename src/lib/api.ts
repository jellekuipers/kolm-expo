import { QueryClient } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import superjson from "superjson";

import { authClient } from "~/lib/auth-client";
import type { AppRouter } from "~/trpc/router";

export const queryClient = new QueryClient();

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: createTRPCClient({
    links: [
      loggerLink({
        colorMode: "ansi",
        enabled: (opts) =>
          process.env.NODE_ENV === "development" ||
          (opts.direction === "down" && opts.result instanceof Error),
      }),
      httpBatchLink({
        headers() {
          const headers = new Map<string, string>();
          const cookies = authClient.getCookie();

          if (cookies) {
            headers.set("Cookie", cookies);
          }

          return Object.fromEntries(headers);
        },
        transformer: superjson,
        url: `${process.env.EXPO_PUBLIC_BASE_URL}/api/trpc`,
      }),
    ],
  }),
  queryClient,
});
