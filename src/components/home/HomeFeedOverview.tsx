import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { globalStyles } from "../../constants/GlobalStyleSheet";
import RecentlyAddedComposers from "../composers/RecentlyAddedComposers";
import SearchBar from "../searchBar/SearchBar";
import RecentlyAddedSheets from "../sheets/RecentlyAddedSheets";

export default function HomeFeedOverview() {
  return (
    <View style={styles.mainWrapper}>
      <Ionicons name="sync" size={20} />
      <Text style={styles.overViewText}>Overview</Text>
      <SearchBar />
      <RecentlyAddedSheets />
      <RecentlyAddedComposers />
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
