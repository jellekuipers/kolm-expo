import {
  Text as NativeText,
  type TextProps as NativeTextProps,
} from "react-native";

export function Text({ className, ...props }: NativeTextProps) {
  return <NativeText {...props} />;
}
