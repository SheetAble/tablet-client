import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  emptySearchResults,
  selectSearchResults,
  setIsSearchActive,
  setSearchResultsAsync,
} from "../../redux/slicers/ui/uiSlice";

export default function SearchBar({ placeholder }: { placeholder?: string }) {
  const [searchString, setSearchString] = useState("");
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector(selectSearchResults);

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
        placeholder={
          placeholder ? placeholder : "Search for Sheets or Composers"
        }
        onChangeText={(searchString) => {
          setSearchString(searchString);
          if (searchString == "") {
            dispatch(emptySearchResults());
            return;
          }
          dispatch(setSearchResultsAsync(searchString));
        }}
        onBlur={() => {
          dispatch(emptySearchResults());
          dispatch(setIsSearchActive(false));
        }}
        onFocus={() => dispatch(setIsSearchActive(true))}
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
    padding: 6,
  },
  input: {
    flex: 1,
    color: colors.GRAY2,
    ...globalStyles.vollkornBodySmall,
  },
});
