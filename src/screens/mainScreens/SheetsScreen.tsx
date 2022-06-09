import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import SearchBar from "../../components/searchBar/SearchBar";
import RecentlyAddedSheets from "../../components/sheets/RecentlyAddedSheets";
import SheetCard from "../../components/sheets/SheetCard";
import { globalStyles } from "../../constants/GlobalStyleSheet";
import { selectSheets } from "../../redux/slicers/data/dataSlice";
import { useAppSelector } from "../../redux/store";

export default function SheetsScreen() {
  const sheets = useAppSelector(selectSheets);

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.overViewText}>Overview</Text>
      <SearchBar placeholder="Search Sheets" />
      <View style={styles.mainSection}>
        <Text style={[globalStyles.vollkornHeadline]}>
          Recently Added Sheets
        </Text>
        <ScrollView style={{ marginLeft: -10 }}>
          <FlatList
            data={sheets}
            renderItem={(sheet) => (
              <SheetCard
                sheet={sheet.item}
                first={sheet.index == 0 || sheet.index % 5 == 0}
              />
            )}
            keyExtractor={(sheet) => sheet.safeSheetName}
            contentContainerStyle={{ alignSelf: "flex-start" }}
            numColumns={5}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
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
    marginLeft: 20,
  },
  overViewText: {
    ...globalStyles.vollkornTitle3,
    ...globalStyles.mv2,
  },
  mainSection: {
    ...globalStyles.mt3,
  },
});
