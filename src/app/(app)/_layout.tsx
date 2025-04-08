import { Redirect, Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Platform, View } from "react-native";

import { authClient } from "~/lib/auth-client";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
	const { data: session, isPending } = authClient.useSession();

	useEffect(() => {
		if (!isPending) {
			SplashScreen.hideAsync();
		}
	}, [isPending]);

	if (isPending) {
		const isWeb = Platform.OS === "web";

		if (!isWeb) return null;

		return (
			<View className="flex-1 flex items-center justify-center">
				<ActivityIndicator />
			</View>
		);
	}

	if (!isPending && !session) {
		return <Redirect href="/sign-in" />;
	}

	return <Slot />;
}
