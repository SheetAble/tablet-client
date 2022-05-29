import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../../constants/GlobalStyleSheet";

export default function RecentlyAddedSheets() {
  return (
    <View style={styles.mainSection}>
      <Text style={globalStyles.vollkornHeadline}>Recently Added Sheets</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainSection: {
    ...globalStyles.mt3,
  },
});
