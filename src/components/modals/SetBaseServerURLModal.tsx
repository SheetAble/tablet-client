import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectServerURL, setServerURL } from "../../redux/slicers/ui/uiSlice";

export default function SetBaseServerURLModal({
  setServerSettingsModalShow,
}: {
  setServerSettingsModalShow: Function;
}) {
  const serverURL = useAppSelector(selectServerURL);
  const [serverURLValue, setServerURLValue] = useState(serverURL.slice(0, -4));
  const dispatch = useAppDispatch();

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.topbarContainer}>
          <Text style={styles.labelText}>Change base server URL</Text>
          <Ionicons
            name="close"
            color={colors.GRAY8}
            size={25}
            onPress={() => setServerSettingsModalShow(false)}
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Server URL"
          value={serverURLValue}
          onChangeText={(val) => setServerURLValue(val)}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Save"
            onPress={() => {
              dispatch(setServerURL(serverURLValue + "/api"));
              setServerSettingsModalShow(false);
            }}
            color="white"
          />
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
  topbarContainer: {
    marginBottom: -20,
    marginTop: -15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  labelText: {
    ...globalStyles.nunitoSansBody,
    color: colors.GRAY5,
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
    paddingHorizontal: 70,
    borderRadius: 14,
  },
});
