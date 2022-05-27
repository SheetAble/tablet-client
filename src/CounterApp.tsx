/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the Redux TypeScript template
 * https://github.com/rahsheen/react-native-template-redux-typescript
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { Counter } from "./components/Counter";
import { UserList } from "./components/UserList";

declare const global: { HermesInternal: null | {} };

const CounterApp = () => {
  return (
    <>
      <SafeAreaView>
        <UserList />
      </SafeAreaView>
    </>
  );
};

export default CounterApp;
