import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabScreenText from "../components/utils/TabScreenText";
import HomeScreen from "../screens/mainScreens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SheetScreen from "../screens/functionalScreens/SheetScreen";
import { colors } from "../constants/GlobalStyleSheet";
import { RootStackParamList } from "../screens/RootStackParams";
import ComposersScreen from "../screens/mainScreens/ComposersScreen";
import SettingsScreen from "../screens/mainScreens/SettingsScreen";

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function TabNavigator() {
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
        component={SheetScreen}
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
