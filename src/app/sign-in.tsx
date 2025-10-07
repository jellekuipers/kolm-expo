import { router } from "expo-router";
import { Text, View } from "react-native";

import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { authClient } from "@/lib/auth-client";

export default function Index() {
  const handleSignIn = async () => {
    await authClient.signIn.email({
      email: "admin@kolm.start",
      password: "password1234",
    });

    router.replace("/");
  };

  return (
    <View>
      <Logo />
      <Text>kolm</Text>
      <View>
        <Button onPress={handleSignIn}>Sign in</Button>
      </View>
    </View>
  );
}
