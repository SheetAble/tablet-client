import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { nativeApplicationVersion } from "expo-application";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";
import { useDispatch } from "react-redux";
import {
  loginAsync,
  selectLoginError,
} from "../../redux/slicers/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { isLandscape } from "../../utils/rnMethods";
import Ionicons from "react-native-vector-icons/Ionicons";
import SetBaseServerURLModal from "../../components/modals/SetBaseServerURLModal";
import { syncAll } from "../../utils/callMethods";

export default function SignInScreen() {
  const dispatch = useAppDispatch();
  const [serverSettingsModalShow, setServerSettingsModalShow] = useState(false);
  const error = useAppSelector(selectLoginError);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Ionicons
        name="md-settings-sharp"
        color={colors.GRAY7}
        size={25}
        style={styles.settingsIconStyle}
        onPress={() => setServerSettingsModalShow(true)}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={serverSettingsModalShow}
        onRequestClose={() => {
          setServerSettingsModalShow(!serverSettingsModalShow);
        }}
      >
        <SetBaseServerURLModal
          setServerSettingsModalShow={setServerSettingsModalShow}
        />
      </Modal>
      <View style={isLandscape() ? { marginTop: "20%" } : { marginTop: "30%" }}>
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
            value={email}
            onChangeText={(val: string) => setEmail(val)}
          />
          <TextInput
            style={[styles.textInput, { marginTop: 20 }]}
            placeholder="Enter Password"
            keyboardType="default"
            autoComplete="password"
            textContentType="password"
            secureTextEntry={true}
            value={password}
            onChangeText={(val: string) => setPassword(val)}
          />
          <View style={styles.belowContainer}>
            <Text style={styles.errorText}>{error ? "Login Failed" : ""}</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.recoverPassword}>Recover Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => {
              dispatch(
                loginAsync({
                  email: email,
                  password: password,
                })
              );
              syncAll(dispatch);
            }}
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
  errorText: {
    ...globalStyles.nunitoSansBodyBold,
    marginTop: 10,
    color: colors.RED3,
  },
  belowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    color: colors.GRAY3,
  },
  recoverPassword: {
    ...globalStyles.nunitoSansBodyBold,
    color: colors.GRAY8,
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
  settingsIconStyle: {
    marginTop: 20,
    marginLeft: 20,
  },
});
