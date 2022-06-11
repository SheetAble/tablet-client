import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { nativeApplicationVersion } from "expo-application";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../redux/slicers/user/userSlice";
import { useAppDispatch } from "../../redux/store";

export default function SignInScreen() {
  type signInScreenProp = NativeStackNavigationProp<
    RootStackParamList,
    "Settings"
  >;
  const navigation = useNavigation<signInScreenProp>();
  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={styles.headerText}>
            Sheet<Text style={{ color: colors.BLUE10 }}>Able</Text>
          </Text>
          <Text style={styles.versionText}> v{nativeApplicationVersion}</Text>
        </View>
        <Text style={styles.loginText}>Login</Text>
        <View style={{ flexDirection: "column", alignSelf: "center" }}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            keyboardType="email-address"
            autoComplete="email"
            textContentType="emailAddress"
          />
          <TextInput
            style={[styles.textInput, { marginTop: 20 }]}
            placeholder="Enter Password"
            keyboardType="default"
            autoComplete="password"
            textContentType="password"
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.recoverPassword}>Recover Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => dispatch(loginAsync())}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "30%",
  },
  headerText: {
    textAlign: "center",
    ...globalStyles.nunitoSansLargeTitle,
    lineHeight: 80,
    marginLeft: 50,
  },
  versionText: {
    ...globalStyles.nunitoSansBody,
    fontSize: 20,
    color: colors.GRAY7,
    paddingTop: 37,
  },
  loginText: {
    textAlign: "center",
    ...globalStyles.nunitoSansTitle2,
    color: colors.GRAY5,
    lineHeight: 50,
    marginTop: -10,
  },
  textInput: {
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: colors.BLUE12,
    height: 45,
    width: 350,
    paddingLeft: 10,
    ...globalStyles.nunitoSansHeadline,
    fontFamily: "NunitoSans_400Regular",
    borderRadius: 8,
    fontSize: 20,
    color: colors.GRAY7,
  },
  recoverPassword: {
    ...globalStyles.nunitoSansBodyBold,
    color: colors.GRAY6,
    textAlign: "right",
    marginTop: 10,
  },
  signInButton: {
    backgroundColor: colors.BLUE7,
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 7,
    ...globalStyles.shadowBox,
  },
  signInButtonText: {
    ...globalStyles.nunitoSansTitle3,
    color: "white",
    textAlign: "center",
    fontSize: 27,
  },
});
