import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { useAppSelector } from "../../redux/store";
import {
  selectComposers,
  selectSheets,
} from "../../redux/slicers/data/dataSlice";
import ComposerCard from "./ComposerCard";

export default function RecentlyAddedComposers() {
  // Slice sheets to take only first 6
  const composers = useAppSelector(selectComposers).slice(0, 6);

  return (
    <View style={styles.mainSection}>
      <Text style={globalStyles.vollkornHeadline}>
        Recently Added Composers
      </Text>
      <ScrollView horizontal={true} style={styles.sheetsList}>
        {composers.map((composer) => (
          <ComposerCard composer={composer} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainSection: {
    ...globalStyles.mt3,
  },
  sheetsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: -10, // To give the sheet card shadow enough space without placing too much on the left
  },
});
