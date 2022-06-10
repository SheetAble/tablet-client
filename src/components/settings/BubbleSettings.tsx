import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";

const BubbleSettings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Server</Text>
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Account</Text>
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Log out</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITESMOKE,
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 20,
  },
  settingContainer: {
    paddingTop: 4,
    paddingBottom: 4,
    marginHorizontal: 10,
    borderBottomWidth: 0.3,
    borderColor: colors.GRAY5,
  },
  settingText: {
    ...globalStyles.nunitoSansBodySmall,
  },
});

export default BubbleSettings;
