import { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { globalStyles } from "../../constants/GlobalStyleSheet";
import {
  getComposersAsync,
  getSheetsAsync,
} from "../../redux/slicers/data/dataSlice";
import { useAppDispatch } from "../../redux/store";
import { syncAll } from "../../utils/callMethods";
import RecentlyAddedComposers from "../composers/RecentlyAddedComposers";
import SearchBar from "../searchBar/SearchBar";
import RecentlyAddedSheets from "../sheets/RecentlyAddedSheets";

export default function HomeFeedOverview() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(getSheetsAsync());
    //dispatch(getComposersAsync());
  });

  return (
    <View style={styles.mainWrapper}>
      <Ionicons
        name="sync"
        size={20}
        onPress={() => {
          syncAll(dispatch);
        }}
      />
      <Text style={styles.overViewText}>Overview</Text>
      <SearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginLeft: -10,
          marginRight: -20 /* For the shadow of the cards*/,
        }}
      >
        <RecentlyAddedSheets />
        <RecentlyAddedComposers />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    ...globalStyles.mr3,
  },
  overViewText: {
    ...globalStyles.vollkornTitle3,
    ...globalStyles.mv2,
  },
});
