import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import type { BetterAuthPlugin } from "better-auth/types";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
	baseURL: process.env.EXPO_PUBLIC_BASE_URL,
	plugins: [
		expoClient({
			scheme: "kolm-expo",
			storagePrefix: "kolm-expo",
			storage: SecureStore,
		}) as BetterAuthPlugin,
	],
});
