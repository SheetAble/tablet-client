import { Button, StyleSheet, Text, View } from "react-native";
import SettingsSelector from "../../components/settings/SettingsSelector";
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
      <SettingsSelector />
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

  settingsDisplayContainer: {},
});
