import { type GestureResponderEvent, Pressable, Text } from "react-native";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

export function Button({ children, onPress }: ButtonProps) {
  return (
    <Pressable
      className="flex flex-row h-10 items-center gap-2 rounded border px-4 bg-black"
      onPress={onPress}
    >
      <Text className="text-base font-medium text-white antialiased">
        {children}
      </Text>
    </Pressable>
  );
}
