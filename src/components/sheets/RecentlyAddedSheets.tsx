import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { useAppSelector } from "../../redux/store";
import { selectSheets } from "../../redux/slicers/data/dataSlice";
import SheetCard from "./SheetCard";

export default function RecentlyAddedSheets() {
  // Slice sheets to take only first 6
  const sheets = useAppSelector(selectSheets).slice(0, 6);

  return (
    <View style={styles.mainSection}>
      <Text style={globalStyles.vollkornHeadline}>Recently Added Sheets</Text>
      <ScrollView horizontal={true} style={styles.sheetsList}>
        {sheets.map((sheet) => (
          <SheetCard sheet={sheet} />
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
