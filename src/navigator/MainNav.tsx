import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../screens/RootStackParams";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "../constants/GlobalStyleSheet";
import SheetScreen from "../screens/functionalScreens/SheetScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import TabNavigator from "./TabNav";
import { useAppSelector } from "../redux/store";
import { selectAuthenticated } from "../redux/slicers/user/userSlice";

const Stack = createStackNavigator<RootStackParamList>();

export default function MainNav() {
  const authenticated = useAppSelector(selectAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.BLUE8 },
        }}
      >
        {authenticated ? (
          <>
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
          </>
        ) : (
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
