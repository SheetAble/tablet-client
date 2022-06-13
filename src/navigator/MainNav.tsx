import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../screens/RootStackParams";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "../constants/GlobalStyleSheet";
import SheetScreen from "../screens/functionalScreens/SheetScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import TabNavigator from "./TabNav";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectAuthenticated } from "../redux/slicers/user/userSlice";
import { selectServerURL, setServerURL } from "../redux/slicers/ui/uiSlice";
import DetailedComposerViewScreen from "../screens/functionalScreens/DetailedComposerViewScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function MainNav() {
  const authenticated = useAppSelector(selectAuthenticated);
  const serverURL = useAppSelector(selectServerURL);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Default set of serverURL to clear up the default case
    dispatch(setServerURL(serverURL));
  });

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
            <Stack.Screen
              name="DetailedComposerView"
              component={DetailedComposerViewScreen}
              options={({ route }) => ({
                title: `Composer - ${route.params.name}`,
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
