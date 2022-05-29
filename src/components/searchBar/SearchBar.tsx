import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar() {
  const [searchString, setSearchString] = useState("");

  return (
    <View style={styles.searchSection}>
      <Ionicons
        name="search-outline"
        size={22}
        color={colors.GRAY5}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search for Sheets or Composers"
        onChangeText={(searchString) => {
          setSearchString(searchString);
        }}
        underlineColorAndroid="transparent"
        placeholderTextColor={colors.GRAY5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.GRAY11,
    borderRadius: 10,
  },
  searchIcon: {
    padding: 7,
  },
  input: {
    flex: 1,
    paddingTop: 7,
    paddingRight: 7,
    paddingBottom: 7,
    paddingLeft: 0,
    color: colors.GRAY2,
    ...globalStyles.vollkornBodySmall,
  },
});
