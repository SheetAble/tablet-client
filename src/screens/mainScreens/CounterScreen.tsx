/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the Redux TypeScript template
 * https://github.com/rahsheen/react-native-template-redux-typescript
 *
 * @format
 */

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from "react-native";

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { Counter } from "../../components/Counter";
import { UserList } from "../../components/UserList";
import { RootStackParamList } from "./RootStackParams";

type counterScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Counter"
>;

const CounterScreen = () => {
  const navigation = useNavigation<counterScreenProp>();

  return (
    <>
      <SafeAreaView>
        <UserList navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

export default CounterScreen;
