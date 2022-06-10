import { Button, StyleSheet, Text, View } from "react-native";
import SettingsDisplay from "../../components/settings/SettingsDisplay";
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
      <SettingsDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  settingsScreenContainer: {
    marginTop: 20,
    flexDirection: "row",
    flex: 1,
  },
});
