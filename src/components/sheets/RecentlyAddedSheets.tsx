import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { useAppSelector } from "../../redux/store";
import { selectSheets } from "../../redux/slicers/data/dataSlice";
import SheetCard from "./SheetCard";

export default function RecentlyAddedSheets() {
  const sheets = useAppSelector(selectSheets);

  return (
    <View style={styles.mainSection}>
      <Text style={globalStyles.vollkornHeadline}>Recently Added Sheets</Text>
      <View style={styles.sheetsList}>
        {sheets.map((sheet) => (
          <SheetCard sheet={sheet} />
        ))}
      </View>
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
  },
});
