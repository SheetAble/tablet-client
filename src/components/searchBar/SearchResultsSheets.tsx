import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Sheet } from "../../redux/slicers/data/dataSlice";
import SheetCard from "../sheets/SheetCard";

export default function SearchResultsSheets({ sheets }: { sheets: Sheet[] }) {
  return (
    <ScrollView horizontal={true} style={styles.sheetsList}>
      {sheets.map((sheet: Sheet, index: number) => (
        <SheetCard sheet={sheet} first={index == 0} key={sheet.safeSheetName} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheetsList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
