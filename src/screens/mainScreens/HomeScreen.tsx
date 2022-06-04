import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, SafeAreaView, StyleSheet, View } from "react-native";
import DetailedPreview from "../../components/home/DetailedPreview";
import HomeFeedOverview from "../../components/home/HomeFeedOverview";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { selectData } from "../../redux/slicers/data/dataSlice";
import { useAppSelector } from "../../redux/store";
import { RootStackParamList } from "./RootStackParams";

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<homeScreenProp>();
  const data = useAppSelector(selectData);

  if (data.composers && data.sheets) {
    return (
      <View style={styles.mainWrapper}>
        <View style={styles.margin}>
          <HomeFeedOverview />
          <DetailedPreview />
        </View>
      </View>
    );
  }
  return <Text>loading</Text>;
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.WHITESMOKE,
  },
  margin: {
    flex: 1,
    flexDirection: "row",
    ...globalStyles.ml3,
    ...globalStyles.mt3,
  },
});
