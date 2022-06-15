import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

export default function SettingsDisplay() {
  const [version, setVersion] = useState("");

  useEffect(() => {
    axios.get<{ data: string }>("/version").then((res) => {
      setVersion(res.data.data);
    });
  });

  return (
    <View style={styles.settingsDisplayContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Server Settings</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.versionText}>
          Server version:{" "}
          <Text
            style={{ color: colors.GRAY3, ...globalStyles.nunitoSansBodyBold }}
          >
            {version}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsDisplayContainer: {
    flex: 1,
  },
  textTitle: {
    fontFamily: "Vollkorn_600SemiBold",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    marginTop: 35,
    paddingBottom: 5,
  },
  textContainer: {
    borderBottomWidth: 0.3,
  },
  versionText: {
    ...globalStyles.nunitoSansBody,
  },
  section: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
});
