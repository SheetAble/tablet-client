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
import { HomeIconSvg } from "./src/icons/HomeIconSvg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors, globalStyles } from "./src/constants/GlobalStyleSheet";

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
          screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home" component={HomeScreen} 
          options= {{
            tabBarLabel: ({focused} ) => (
             <Text style={{
               paddingLeft: 17,
               paddingTop: 6,
               color: focused ? colors.PRIMARY_LIGHT : colors.GRAY7, 
               ...globalStyles.nunitoSansBodySmall
             }}>Home</Text> 
            ),
            tabBarIcon: ({ focused, size }) => (
            <Ionicons name="home" color={focused ? colors.PRIMARY_LIGHT : colors.GRAY7} size={size} outlined />
          ),
          }}/>
          <Tab.Screen name="Sheets" component={SheetsScreen} />
          <Tab.Screen name="Composers" component={CounterScreen} />
          <Tab.Screen name="Collections" component={CollectionsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


