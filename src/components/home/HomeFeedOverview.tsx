import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { globalSpace, globalStyles } from "../../constants/GlobalStyleSheet";
import SearchBar from "../searchBar/SearchBar";

export default function HomeFeedOverview() {
  return (
    <View style={styles.mainWrapper}>
      <Ionicons name="sync" size={20} />

      <Text style={styles.overViewText}>Overview</Text>

      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  overViewText: {
    ...globalStyles.vollkornTitle3,
    ...globalStyles.mv2,
  },
});
