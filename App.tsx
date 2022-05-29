import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { loadFonts } from "./src/utils/loadFonts";
import HomeScreen from "./src/screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CounterScreen from "./src/screens/CounterScreen";
import ComposersScreen from "./src/screens/ComposersScreen";
import SheetsScreen from "./src/screens/SheetsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import CollectionsScreen from "./src/screens/CollectionsScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors, globalStyles } from "./src/constants/GlobalStyleSheet";
import { TabScreenText}  from "./src/components/utils/TabScreenText";

const Tab = createBottomTabNavigator()

export default function App() {
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
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              borderTopWidth: 1
            }
          }}
          >
          <Tab.Screen name="Home" component={HomeScreen} 
          options= {{
            tabBarLabel: ({focused} ) => (
             <TabScreenText focused={focused} label="Home"/> 
            ),
            tabBarIcon: ({ focused, size }) => (
            <Ionicons name="home" color={focused ? colors.PRIMARY_LIGHT : colors.GRAY8} size={size}/>
          ),
          }}/>
          <Tab.Screen name="Sheets" component={SheetsScreen} 
            options={{
              tabBarLabel: ({focused} ) => (
              <TabScreenText focused={focused} label="Sheets"/> 
              ),
            tabBarIcon: ({ focused, size }) => (
              <MaterialCommunityIcons name="library" color={focused ? colors.PRIMARY_LIGHT : colors.GRAY8} size={size + 3}/>
            ),}}
          />
          <Tab.Screen name="Composers" component={CounterScreen} 
          options={{
              tabBarLabel: ({focused} ) => (
              <TabScreenText focused={focused} label="Composers"/> 
              ),
            tabBarIcon: ({ focused, size }) => (
              <Ionicons name="people" color={focused ? colors.PRIMARY_LIGHT : colors.GRAY8} size={size + 3}/>
            ),}}
          />
          <Tab.Screen name="Collections" component={CollectionsScreen} 
          options={{
              tabBarLabel: ({focused} ) => (
              <TabScreenText focused={focused} label="Collections"/> 
              ),
            tabBarIcon: ({ focused, size }) => (
              <Ionicons name="md-bookmarks" color={focused ? colors.PRIMARY_LIGHT : colors.GRAY8} size={size - 3}/>
            ),}}
          />
          <Tab.Screen name="Settings" component={SettingsScreen} 
          options={{
              tabBarLabel: ({focused} ) => (
              <TabScreenText focused={focused} label="Settings"/> 
              ),
            tabBarIcon: ({ focused, size }) => (
              <Ionicons name="settings" color={focused ? colors.PRIMARY_LIGHT : colors.GRAY8} size={size}/>
            ),}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


