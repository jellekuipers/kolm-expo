import Svg, { Circle, G, Path } from "react-native-svg";

export function Logo() {
  return (
    <Svg height="48" viewBox="0 0 200 200" width="48">
      <G fill="none" fillRule="evenodd">
        <Circle fill="#000" cx="100" cy="100" r="100" />
        <Path
          d="M160 96.985c-10.425 0-20.85-3.529-30-9.985-18.3 12.838-41.7 12.838-60 0-9.15 6.456-19.575 9.985-30 9.985H25V112h15c10.275 0 20.55-2.628 30-7.508 18.75 9.76 41.25 9.76 60 0 9.45 4.88 19.65 7.508 30 7.508h15V96.985"
          fill="#FFF"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}
