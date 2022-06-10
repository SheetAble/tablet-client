import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { ScrollView } from "react-native-gesture-handler";
import BubbleSettings from "./BubbleSettings";
import { nativeApplicationVersion } from "expo-application";

const SettingsSelector = () => {
  return (
    <View style={styles.settingsSelectorContainer}>
      <Ionicons name="sync" size={20} onPress={() => {}} />
      <Text style={{ ...globalStyles.vollkornTitle3, marginTop: 10 }}>
        Settings
      </Text>
      <ScrollView
        style={styles.optionsContainer}
        contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}
      >
        <View style={styles.options}>
          <BubbleSettings />
        </View>

        <Text style={styles.version}>v{nativeApplicationVersion}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsSelectorContainer: {
    flex: 0.7,
    marginLeft: 20,
  },
  optionsContainer: {
    backgroundColor: colors.GRAY11,
    marginLeft: -20,
  },
  options: {},
  version: {
    ...globalStyles.nunitoSansBodyBold,
    color: colors.GRAY6,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default SettingsSelector;
