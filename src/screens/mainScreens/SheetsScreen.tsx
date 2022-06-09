import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../../components/searchBar/SearchBar";
import RecentlyAddedSheets from "../../components/sheets/RecentlyAddedSheets";
import SheetCard from "../../components/sheets/SheetCard";
import { globalStyles } from "../../constants/GlobalStyleSheet";
import { selectSheets } from "../../redux/slicers/data/dataSlice";
import { useAppSelector } from "../../redux/store";

export default function SheetsScreen() {
  const sheets = useAppSelector(selectSheets).slice(0, 6);

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.overViewText}>Overview</Text>
      <SearchBar />
      <View style={styles.mainSection}>
        <Text style={[globalStyles.vollkornHeadline]}>
          Recently Added Sheets
        </Text>
        <ScrollView style={styles.sheetsList}>
          {sheets.map((sheet, index) => (
            <SheetCard
              sheet={sheet}
              first={index == 0}
              key={sheet.safeSheetName}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    ...globalStyles.mr3,

    marginTop: 20,
    marginLeft: 20
  },
  overViewText: {
    ...globalStyles.vollkornTitle3,
    ...globalStyles.mv2,
  },
    mainSection: {
    ...globalStyles.mt3,
  },
  sheetsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    
  },
});