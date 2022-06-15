import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { syncAll } from "../../utils/callMethods";
import { useAppDispatch } from "../../redux/store";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";

export default function NothingAvailalbe({
  content,
}: {
  content: string /* What is not available*/;
}) {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Ionicons
          name="sync"
          size={20}
          onPress={() => {
            syncAll(dispatch);
          }}
          style={{ zIndex: 2 }}
        />
        <View style={styles.mainContainer}>
          <Text style={styles.textStyle}>No {content} available</Text>
          <Text style={styles.subTextStyle}>
            Upload some to the server to get started
          </Text>
          <View>
            <Image
              style={styles.imgStyle}
              source={require("../../../assets/images/NotFound.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -120,
  },
  textStyle: {
    ...globalStyles.nunitoSansHeadline,
  },
  subTextStyle: {
    ...globalStyles.nunitoSansSubheadline,
    color: colors.GRAY4,
    marginTop: -3,
    marginBottom: 0,

    fontFamily: "NunitoSans_400Regular",
  },
  imgStyle: {
    width: 130 * 2.5,
    height: 100 * 2.5,
  },
});
