import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SetBaseServerURLModal({
  setServerSettingsModalShow,
}: {
  setServerSettingsModalShow: Function;
}) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Ionicons
          name="close"
          color={colors.GRAY7}
          size={25}
          style={styles.closeIconStyle}
          onPress={() => setServerSettingsModalShow(false)}
        />
        <TextInput style={styles.textInput} placeholder="Enter Server URL" />
        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={() => {}} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeIconStyle: {
    alignSelf: "flex-end",
    marginBottom: -15,
    marginTop: -15,
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
  buttonContainer: {
    backgroundColor: colors.BLUE7,
    marginTop: 20,
    paddingHorizontal: 50,
    borderRadius: 14,
  },
});
