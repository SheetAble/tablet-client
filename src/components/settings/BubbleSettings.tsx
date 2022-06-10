import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { TouchableHighlight } from "react-native-gesture-handler";
import { RootStackParamList } from "../../screens/RootStackParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const BubbleSettings = () => {
  type settingsScreenProp = NativeStackNavigationProp<
    RootStackParamList,
    "Settings"
  >;
  const navigation = useNavigation<settingsScreenProp>();

  return (
    <View style={[styles.container, styles.firstItem]}>
      <View style={styles.settingContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.settingText}>Server</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.settingContainer, styles.lastItem]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.settingText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITESMOKE,
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    marginHorizontal: 20,
  },
  settingContainer: {
    paddingTop: 15,
    paddingBottom: 0,
    marginHorizontal: 10,
    borderBottomWidth: 0.3,
    borderColor: colors.GRAY5,
    marginRight: -10,
    marginLeft: -10,
  },
  settingText: {
    ...globalStyles.nunitoSansBodySmall,
    marginLeft: 10,
  },
  lastItem: {
    borderBottomWidth: 0,
    marginBottom: -2,
  },
  firstItem: {
    paddingTop: 5,
  },
});

export default BubbleSettings;
