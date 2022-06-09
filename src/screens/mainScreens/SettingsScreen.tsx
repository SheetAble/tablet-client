import { Button, Text, View } from "react-native";
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
  const authenticated = useAppSelector(selectAuthenticated);
  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 100,
      }}
    >
      <Text>Settings Screen</Text>
      <Text>{authenticated ? "authenticated" : "not authenticated"}</Text>
      <Button title="login" onPress={() => dispatch(loginAsync())} />
      <Button
        title="Get Data"
        onPress={() => {
          syncAll(dispatch);
        }}
      />
    </View>
  );
}
