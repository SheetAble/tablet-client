import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { Sheet } from "../../redux/slicers/data/dataSlice";
import { RootStackParamList } from "../mainScreens/RootStackParams";

type Props = NativeStackScreenProps<RootStackParamList, "Sheet">;

export default function SheetScreen({ route, navigation }: Props) {
  const sheet = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{sheet.sheetName}</Text>
    </View>
  );
}
