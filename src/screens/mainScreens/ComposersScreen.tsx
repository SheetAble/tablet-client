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
  Composer,
  getComposersAsync,
  getComposersPageAsync,
  getSheetsAsync,
  selectComposers,
  selectComposersPage,
  selectSheets,
  selectSheetsPage,
} from "../../redux/slicers/data/dataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Ionicons from "react-native-vector-icons/Ionicons";
import { syncAll } from "../../utils/callMethods";
import ComposerCard from "../../components/composers/ComposerCard";
import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";
import { useNavigation } from "@react-navigation/native";
import {
  emptySearchComposerResults,
  selecetIsSearchActive,
  selectSearchComposerResults,
  setSearchComposerResultsAsync,
} from "../../redux/slicers/ui/uiSlice";
import NothingAvailalbe from "../../components/utils/NothingAvailable";

export default function ComposersScreen() {
  const composers = useAppSelector(selectComposersPage);
  const dispatch = useAppDispatch();

  const [firstLoad, setfirstLoad] = useState(true);

  // For searchBar
  const [emptyString, setEmptyString] = useState(true);
  const isSearchActive = useAppSelector(selecetIsSearchActive);
  const searchResults = useAppSelector(selectSearchComposerResults);

  type composerScreenProp = NativeStackNavigationProp<
    RootStackParamList,
    "Composers"
  >;
  const navigation = useNavigation<composerScreenProp>();

  useEffect(() => {
    if (composers.length == 0 && firstLoad) {
      dispatch(getComposersPageAsync({ limit: "1000" }));
      setfirstLoad(false);
    }
  });

  return composers.length == 0 ? (
    <NothingAvailalbe content="Composers" />
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
        placeholder="Search Composers"
        setSearchResultsAsync={setSearchComposerResultsAsync}
        emptySearchResults={emptySearchComposerResults}
        setEmptyString={setEmptyString}
      />
      <View style={styles.mainSection}>
        <Text style={globalStyles.vollkornHeadline}>
          {isSearchActive && !emptyString
            ? "Search Results"
            : "Composers by newest uploads"}
        </Text>
        <FlatList
          style={{ marginLeft: -10, height: "100%" }}
          data={isSearchActive && !emptyString ? searchResults : composers}
          renderItem={(composer) => (
            <ComposerCard
              composer={composer.item}
              first={
                composer.index == 0 ||
                composer.index %
                  Math.ceil(Dimensions.get("window").width / 190) ==
                  0
              }
              callNav={(composer: Composer) => {
                navigation.navigate("DetailedComposerView", composer);
              }}
            />
          )}
          keyExtractor={(composer) => composer.safeName}
          contentContainerStyle={{ alignSelf: "flex-start" }}
          numColumns={
            Math.ceil(
              Dimensions.get("window").width / 190
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
