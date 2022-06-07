import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Sheet } from "../../redux/slicers/data/dataSlice";
import { RootStackParamList } from "../RootStackParams";
import SheetPDf from "../../components/pdfView/SheetPDF";

type Props = NativeStackScreenProps<RootStackParamList, "Sheet">;

export default function SheetScreen({ route, navigation }: Props) {
  const sheet = route.params;


  return (
      <SheetPDf sheet={sheet} />
  );
}