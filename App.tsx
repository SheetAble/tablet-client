import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { View, Text, Button, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { loadFonts } from "./src/utils/loadFonts";
import HomeScreen from "./src/screens/mainScreens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CounterScreen from "./src/screens/mainScreens/CounterScreen";
import ComposersScreen from "./src/screens/mainScreens/ComposersScreen";
import SheetsScreen from "./src/screens/mainScreens/SheetsScreen";
import SettingsScreen from "./src/screens/mainScreens/SettingsScreen";
import CollectionsScreen from "./src/screens/mainScreens/CollectionsScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors, globalStyles } from "./src/constants/GlobalStyleSheet";
import { TabScreenText } from "./src/components/utils/TabScreenText";
import axios from "axios";
import { createStackNavigator } from "@react-navigation/stack";
import SheetScreen from "./src/screens/functionalScreens/SheetScreen";
import { RootStackParamList } from "./src/screens/RootStackParams";

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

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
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: colors.BLUE8 },
          }}
        >
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sheet"
            component={SheetScreen}
            options={({ route }) => ({
              title: `Sheet - ${route.params.sheetName}`,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="HomeFeed"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabScreenText focused={focused} label="Home" />
          ),
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home"
              color={focused ? colors.PRIMARY_LIGHT : colors.GRAY8}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sheets"
        component={SheetsScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabScreenText focused={focused} label="Sheets" />
          ),
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="library"
              color={focused ? colors.PRIMARY_LIGHT : colors.GRAY8}
              size={size + 3}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Composers"
        component={ComposersScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabScreenText focused={focused} label="Composers" />
          ),
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="people"
              color={focused ? colors.PRIMARY_LIGHT : colors.GRAY8}
              size={size + 3}
            />
          ),
        }}
      />
      {/* Not implemented yet:
      <Tab.Screen
        name="Collections"
        component={CollectionsScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabScreenText focused={focused} label="Collections" />
          ),
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="md-bookmarks"
              color={focused ? colors.PRIMARY_LIGHT : colors.GRAY8}
              size={size - 3}
            />
          ),
        }}
      />*/}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabScreenText focused={focused} label="Settings" />
          ),
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="cog"
              color={focused ? colors.PRIMARY_LIGHT : colors.GRAY8}
              size={size + 5}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
