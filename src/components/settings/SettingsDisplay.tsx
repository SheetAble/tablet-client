import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { TextInput } from "react-native-gesture-handler";

export default function SettingsDisplay() {
  return (
    <View style={styles.settingsDisplayContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Server Settings</Text>
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="https://yourserver.sheetable.net"
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.GRAY5}
        />
        <Button title="save" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsDisplayContainer: {
    flex: 1,
  },
  textTitle: {
    fontFamily: "Vollkorn_600SemiBold",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    marginTop: 35,
    paddingBottom: 5,
  },
  textContainer: {
    borderBottomWidth: 0.3,
  },
  input: {
    flex: 1,
    color: colors.GRAY2,
    ...globalStyles.nunitoSansBodySmall,
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.GRAY11,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginLeft: 50,
    marginRight: 80,
  },
});
