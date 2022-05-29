import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Sheet } from "../../redux/slicers/data/dataSlice";
import axios from "axios";
import { colors } from "../../constants/GlobalStyleSheet";

export default function SheetCard({ sheet }: { sheet: Sheet }) {
  return (
    <View key={sheet.safeSheetName} style={styles.cardWrapper}>
      <Image
        source={{
          uri: `${axios.defaults.baseURL}/sheet/thumbnail/${sheet.safeSheetName}`,
        }}
        style={styles.thumbnailImage}
      />
      <Text>{sheet.sheetName} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: colors.RED1,
  },
  thumbnailImage: {
    resizeMode: "contain",
    height: 230,
    width: 159,
  },
});
