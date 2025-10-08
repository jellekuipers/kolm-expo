import { router } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

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
    <View style={styles.container}>
      <Logo />
      <Text>kolm</Text>
      <View>
        <Button onPress={handleSignIn}>Sign in</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(() => ({
  container: {
    alignItems: "center",
    flex: 1,
    includeFontPadding: true,
    justifyContent: "center",
  },
}));
