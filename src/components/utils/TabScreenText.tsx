import { View, Text, Button } from "react-native";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";

interface TabScreenTextProps {
  focused: boolean;
  label: string;
}

export function TabScreenText({ focused, label }: TabScreenTextProps) {
  return (
    <Text
      style={{
        marginLeft: 23,
        paddingTop: 6,
        color: focused ? colors.PRIMARY_LIGHT : colors.GRAY7,
        ...globalStyles.nunitoSansBodySmall,
      }}
    >
      {label}
    </Text>
  );
}

export default TabScreenText;
