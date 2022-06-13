import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Sheet } from "../../redux/slicers/data/dataSlice";
import { RootStackParamList } from "../RootStackParams";
import SheetPDf from "../../components/pdfView/SheetPDF";

type Props = NativeStackScreenProps<RootStackParamList, "DetailedComposerView">;

export default function DetailedComposerViewScreen({
  route,
  navigation,
}: Props) {
  const composer = route.params;

  return (
    <View>
      <Text>{composer.name}</Text>
    </View>
  );
}
