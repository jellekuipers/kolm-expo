import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, View } from "react-native";

import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { Text } from "@/components/text";
import { trpc } from "@/lib/api";
import { authClient } from "@/lib/auth-client";

export default function Index() {
  const { data: session } = authClient.useSession();
  const { data: stats, isLoading: isLoadingStats } = useQuery(
    trpc.stats.getStats.queryOptions(),
  );

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <View>
      <Logo />
      <Text>kolm</Text>
      <View>
        <Text>{session?.user.email}</Text>
        {isLoadingStats ? (
          <ActivityIndicator />
        ) : (
          <Text>{stats?.users} users</Text>
        )}
        <Button onPress={handleSignOut}>Sign out</Button>
      </View>
    </View>
  );
}
