import { Button, Text, View } from "react-native";
import { getSheetsAsync } from "../redux/slicers/data/dataSlice";
import {
  loginAsync,
  selectAuthenticated,
} from "../redux/slicers/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

export default function SettingsScreen() {
  const authenticated = useAppSelector(selectAuthenticated);
  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Text>{authenticated ? "test" : "no test"}</Text>
      <Button title="login" onPress={() => dispatch(loginAsync())} />
      <Button title="Get Sheets" onPress={() => dispatch(getSheetsAsync())} />
    </View>
  );
}
