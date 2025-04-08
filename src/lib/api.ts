import { QueryClient } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { Platform } from "react-native";
import superjson from "superjson";

import { authClient } from "~/lib/auth-client";
import type { AppRouter } from "~/trpc/router";

export const queryClient = new QueryClient();

const isNative = Platform.OS === "android" || Platform.OS === "ios";

export const trpc = createTRPCOptionsProxy<AppRouter>({
	client: createTRPCClient({
		links: [
			httpBatchLink({
				transformer: superjson,
				url: `${process.env.EXPO_PUBLIC_BASE_URL}/api/trpc`,
				...(isNative
					? {
							headers() {
								const headers = new Map<string, string>();
								// @ts-expect-error https://github.com/better-auth/better-auth/issues/2031
								const cookies = authClient.getCookie();

								if (cookies) {
									headers.set("Cookie", cookies);
								}

								return Object.fromEntries(headers);
							},
						}
					: {}),
			}),
		],
	}),
	queryClient,
});
