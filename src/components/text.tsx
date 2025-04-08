import {
	Text as NativeText,
	type TextProps as NativeTextProps,
} from "react-native";
import { twMerge } from "tailwind-merge";

export function Text({ className, ...props }: NativeTextProps) {
	return (
		<NativeText
			{...props}
			className={twMerge("text-black text-base antialiased", className)}
		/>
	);
}
