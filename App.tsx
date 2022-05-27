import { Provider } from "react-redux";
import CounterApp from "./src/CounterApp";
import { store } from "./src/redux/store";
import { View, Text } from "react-native";

import { useFonts } from "expo-font";

import {
  NunitoSans_200ExtraLight,
  NunitoSans_200ExtraLight_Italic,
  NunitoSans_300Light,
  NunitoSans_300Light_Italic,
  NunitoSans_400Regular,
  NunitoSans_400Regular_Italic,
  NunitoSans_600SemiBold,
  NunitoSans_600SemiBold_Italic,
  NunitoSans_700Bold,
  NunitoSans_700Bold_Italic,
  NunitoSans_800ExtraBold,
  NunitoSans_800ExtraBold_Italic,
  NunitoSans_900Black,
  NunitoSans_900Black_Italic,
} from "@expo-google-fonts/nunito-sans";

import {
  Vollkorn_400Regular,
  Vollkorn_400Regular_Italic,
  Vollkorn_600SemiBold,
  Vollkorn_600SemiBold_Italic,
  Vollkorn_700Bold,
  Vollkorn_700Bold_Italic,
  Vollkorn_900Black,
  Vollkorn_900Black_Italic,
} from "@expo-google-fonts/vollkorn";

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_200ExtraLight,
    NunitoSans_200ExtraLight_Italic,
    NunitoSans_300Light,
    NunitoSans_300Light_Italic,
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    NunitoSans_700Bold_Italic,
    NunitoSans_800ExtraBold,
    NunitoSans_800ExtraBold_Italic,
    NunitoSans_900Black,
    NunitoSans_900Black_Italic,
    Vollkorn_400Regular,
    Vollkorn_400Regular_Italic,
    Vollkorn_600SemiBold,
    Vollkorn_600SemiBold_Italic,
    Vollkorn_700Bold,
    Vollkorn_700Bold_Italic,
    Vollkorn_900Black,
    Vollkorn_900Black_Italic,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}
