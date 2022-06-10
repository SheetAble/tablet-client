import { Button, StyleSheet, Text, View } from "react-native";
import {
  getComposersAsync,
  getSheetsAsync,
  getSheetsPageAsync,
} from "../../redux/slicers/data/dataSlice";
import {
  loginAsync,
  selectAuthenticated,
} from "../../redux/slicers/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { syncAll } from "../../utils/callMethods";

export default function SettingsScreen() {
  return (
    <View style={styles.settingsScreenContainer}>
      <View style={styles.settingsSelectorContainer}>
        <Text>Settings Selector</Text>
      </View>
      <View style={styles.settingsDisplayContainer}>
        <Text>Settings Display</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsScreenContainer: {
    marginTop: 20,
    flexDirection: "row",
    flex: 1,
  },
  settingsSelectorContainer: {
    flex: 0.7,
  },
  settingsDisplayContainer: {},
});
