import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, View } from "react-native";

import { Button } from "~/components/button";
import { Logo } from "~/components/logo";
import { Text } from "~/components/text";
import { trpc } from "~/lib/api";
import { authClient } from "~/lib/auth-client";

export default function Index() {
	const { data: session } = authClient.useSession();
	const { data: stats, isLoading: isLoadingStats } = useQuery(
		trpc.stats.getStats.queryOptions(),
	);

	const handleSignOut = async () => {
		await authClient.signOut();
	};

	return (
		<View className="flex items-center justify-center flex-1 gap-4">
			<Logo />
			<Text className="text-4xl font-bold">kolm</Text>
			<View className="flex items-center justify-center gap-2">
				<Text className="text-base">{session?.user.email}</Text>
				{isLoadingStats ? (
					<ActivityIndicator />
				) : (
					<Text className="text-base">{stats?.users} users</Text>
				)}
				<Button onPress={handleSignOut}>Sign out</Button>
			</View>
		</View>
	);
}
