import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { View, Text, LogBox } from "react-native";
import { loadFonts } from "./src/utils/loadFonts";
import axios from "axios";
import MainNav from "./src/navigator/MainNav";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

export default function App() {
  // Ignore ViewPropTypes warning
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  ]);

  useEffect(() => {
    // Set default header from secure Token
    SecureStore.getItemAsync("jwtToken").then((val) => {
      axios.defaults.headers.common["Authorization"] = "Bearer " + val;
    });
  });

  if (!loadFonts()) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNav />
      </PersistGate>
    </Provider>
  );
}
