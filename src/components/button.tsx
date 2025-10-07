import { type GestureResponderEvent, Pressable, Text } from "react-native";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

export function Button({ children, onPress }: ButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text>{children}</Text>
    </Pressable>
  );
}
