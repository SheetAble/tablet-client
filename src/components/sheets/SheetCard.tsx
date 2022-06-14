import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Sheet } from "../../redux/slicers/data/dataSlice";
import axios from "axios";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/RootStackParams";

export default function SheetCard({
  sheet,
  first,
}: {
  sheet: Sheet;
  first: boolean;
}) {
  // To remove shadow when button is pressed
  const [isPressed, setIsPressed] = useState(false);

  type homeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

  const navigation = useNavigation<homeScreenProp>();

  return (
    <TouchableWithoutFeedback
      key={sheet.safeSheetName}
      onPressIn={() => {
        setIsPressed(true);
      }}
      onPressOut={() => {
        setIsPressed(false);
        navigation.navigate("Sheet", sheet);
      }}
    >
      <View
        style={[
          styles.cardWrapper,
          isPressed && { shadowOpacity: 0.35, shadowRadius: 1.5 },
          first && { marginLeft: 10 },
        ]}
      >
        <Image
          source={{
            uri: `${axios.defaults.baseURL}/sheet/thumbnail/${sheet.safeSheetName}`,
          }}
          style={styles.thumbnailImage}
        />

        <View style={styles.textInfo}>
          <Text numberOfLines={1} style={styles.sheetNameText}>
            {sheet.sheetName}
          </Text>
          <Text numberOfLines={1} style={styles.composerNameText}>
            {sheet.composer}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: colors.WHITE2,
    borderRadius: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    ...globalStyles.mr3,
    ...globalStyles.mb3,
    ...globalStyles.mt2,
    ...globalStyles.shadowBox,
  },
  thumbnailImage: {
    height: 210 * 0.93,
    width: 148 * 0.93,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textInfo: {
    paddingLeft: 5,
    paddingBottom: 10,
  },
  sheetNameText: {
    ...globalStyles.vollkornBodySmall,
    paddingTop: 2,
    maxWidth: 130, // So the text won't overflow
  },
  composerNameText: {
    fontFamily: "Vollkorn_400Regular",
    fontSize: 10,
    color: colors.GRAY5,
    lineHeight: 11,
  },
});
