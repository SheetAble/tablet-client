import React, { useEffect, useState } from "react";
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
import {
  getSheetsAPICall,
  getSheetsByComposerAPICall,
} from "../../redux/slicers/data/dataAPI";
import SheetCard from "../../components/sheets/SheetCard";
import { FlatList } from "react-native-gesture-handler";

type Props = NativeStackScreenProps<RootStackParamList, "DetailedComposerView">;

export default function DetailedComposerViewScreen({
  route,
  navigation,
}: Props) {
  const composer = route.params;

  const [sheets, setSheets] = useState<Sheet[]>([]);

  useEffect(() => {
    // Make composer sheet api call
    getSheetsByComposerAPICall(composer).then((val) => {
      if (val?.sheets != undefined) {
        return setSheets(val?.sheets);
      }
    });
  });

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

      <FlatList
        style={{ marginLeft: -10, height: "100%" }}
        data={sheets}
        renderItem={(sheet) => (
          <SheetCard
            sheet={sheet.item}
            momentumScroll={false}
            first={
              sheet.index == 0 ||
              sheet.index % Math.ceil(Dimensions.get("window").width / 200) == 0
            }
          />
        )}
        keyExtractor={(sheet) => sheet.safeSheetName}
        contentContainerStyle={{ alignSelf: "flex-start" }}
        numColumns={
          Math.ceil(
            Dimensions.get("window").width / 200
          ) /* Est. width of sheet is 200 */
        }
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
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
