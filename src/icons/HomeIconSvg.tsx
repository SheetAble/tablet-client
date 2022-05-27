import Svg, { Path } from "react-native-svg"

interface Props {
	color: string
}

export const HomeIconSvg = ({color}: Props) => (
  <Svg
    width={29}
    height={29}
    fill="none"
    
    
  >
    <Path
      d="M15.13.233a.967.967 0 0 0-1.26 0L0 12.123V26.1A2.9 2.9 0 0 0 2.9 29h7.733a.967.967 0 0 0 .967-.967v-5.8a2.9 2.9 0 0 1 5.8 0v5.8c0 .534.433.967.967.967H26.1a2.9 2.9 0 0 0 2.9-2.9V12.122L15.13.232Z"
      fill={color}
    />
  </Svg>
)
