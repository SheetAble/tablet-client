import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { View, Text, LogBox } from "react-native";
import { loadFonts } from "./src/utils/loadFonts";
import axios from "axios";
import MainNav from "./src/navigator/MainNav";

export default function App() {
  axios.defaults.baseURL = "http://192.168.0.65:8080/api";

  // Ignore ViewPropTypes warning
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  ]);

  if (!loadFonts()) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
}
