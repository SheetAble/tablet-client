import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import SearchBar from "../../components/searchBar/SearchBar";
import RecentlyAddedSheets from "../../components/sheets/RecentlyAddedSheets";
import SheetCard from "../../components/sheets/SheetCard";
import { globalStyles } from "../../constants/GlobalStyleSheet";
import {
  getComposersAsync,
  getSheetsAsync,
  getSheetsPageAsync,
  selectSheets,
  selectSheetsPage,
} from "../../redux/slicers/data/dataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Ionicons from "react-native-vector-icons/Ionicons";
import { syncAll } from "../../utils/callMethods";
import { useEffect, useState } from "react";
import {
  emptySearchSheetResults,
  selecetIsSearchActive,
  selectSearchSheetResults,
  setSearchSheetResultsAsync,
} from "../../redux/slicers/ui/uiSlice";
import NothingAvailalbe from "../../components/utils/NothingAvailable";

export default function SheetsScreen() {
  const sheets = useAppSelector(selectSheetsPage);
  const dispatch = useAppDispatch();
  const [firstLoad, setfirstLoad] = useState(true);

  // For searchBar
  const [emptyString, setEmptyString] = useState(true);
  const isSearchActive = useAppSelector(selecetIsSearchActive);
  const searchResults = useAppSelector(selectSearchSheetResults);

  useEffect(() => {
    if (sheets.length == 0 && firstLoad) {
      dispatch(getSheetsPageAsync({ limit: "1000" }));
      setfirstLoad(false);
    }
  });

  return sheets.length == 0 ? (
    <NothingAvailalbe content="Sheets" />
  ) : (
    <View style={styles.mainWrapper}>
      <Ionicons
        name="sync"
        size={20}
        onPress={() => {
          syncAll(dispatch);
        }}
      />

      <Text style={styles.overViewText}>Overview</Text>
      <SearchBar
        placeholder="Search Sheets"
        setEmptyString={setEmptyString}
        setSearchResultsAsync={setSearchSheetResultsAsync}
        emptySearchResults={emptySearchSheetResults}
      />
      <View style={styles.mainSection}>
        <Text style={globalStyles.vollkornHeadline}>
          {isSearchActive && !emptyString
            ? "Search Results"
            : "Sheets by newest uploads"}
        </Text>

        <FlatList
          style={{ marginLeft: -10, height: "100%" }}
          data={isSearchActive && !emptyString ? searchResults : sheets}
          renderItem={(sheet) => (
            <SheetCard
              sheet={sheet.item}
              first={
                sheet.index == 0 ||
                sheet.index % Math.ceil(Dimensions.get("window").width / 200) ==
                  0
              }
            />
          )}
          keyExtractor={(sheet) => sheet.safeSheetName}
          contentContainerStyle={{ alignSelf: "flex-start" }}
          numColumns={
            Math.ceil(
              Dimensions.get("window").width / 200
            ) /* Est. width of sheet is 200 */
          }
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
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
