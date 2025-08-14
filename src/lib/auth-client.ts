import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const webStore = {
  getItem: () => "",
  setItem: () => {},
};

export const authClient = createAuthClient({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  plugins: [
    expoClient({
      scheme: "kolm-expo",
      storage: Platform.OS === "web" ? webStore : SecureStore,
      storagePrefix: "kolm-expo",
    }),
  ],
});
