import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { Sheet } from "../../redux/slicers/data/dataSlice";
import { RootStackParamList } from "../RootStackParams";
import SheetPDf from "../../components/pdfView/SheetPDF";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";

type Props = NativeStackScreenProps<RootStackParamList, "DetailedComposerView">;

export default function DetailedComposerViewScreen({
  route,
  navigation,
}: Props) {
  const composer = route.params;

  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: composer.portraitUrl,
        }}
        style={styles.portraitImage}
      />
      <Text style={styles.composerName}>{composer.name}</Text>
      <Text style={styles.composerEpoch}>{composer.epoch}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  portraitImage: {
    height: 230,
    width: 230,
    borderRadius: 15,
  },
  composerName: {
    ...globalStyles.vollkornTitle2,
    marginTop: 20,
  },
  composerEpoch: {
    ...globalStyles.vollkornHeadline,
    color: colors.GRAY5,
    marginTop: -10,
  },
});
