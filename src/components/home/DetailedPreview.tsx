import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addDetailedPreviewAsync,
  selectDetailedPreview,
  selectDetailedPreviewSheets,
} from "../../redux/slicers/ui/uiSlice";
import { selectComposers } from "../../redux/slicers/data/dataSlice";
import Ionicons from "react-native-vector-icons/Ionicons";

function BubbleInfo({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.bubbleInfoContainer}>
      <Text style={styles.bubbleInfoTitleStyle}>{title}</Text>
      <Text style={styles.bubbleInfoValueStyle}>{value}</Text>
    </View>
  );
}

export default function DetailedPreview() {
  const detailedPreviewComposer = useAppSelector(selectDetailedPreview);
  const detailedPreviewSheets = useAppSelector(selectDetailedPreviewSheets);
  const firstComposer = useAppSelector(selectComposers)[0];
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (detailedPreviewComposer == undefined) {
      dispatch(addDetailedPreviewAsync(firstComposer));
    }
  });
  if (detailedPreviewComposer) {
    return (
      <View style={styles.mainWrapper}>
        <View style={styles.titleWrapper}>
          <Image
            source={{
              uri: detailedPreviewComposer.portraitUrl,
            }}
            style={styles.thumbnailImage}
          />
          <View style={styles.textWrapper}>
            <Text style={globalStyles.vollkornHeadline}>
              {detailedPreviewComposer.name}
            </Text>
            <Text style={styles.subHeading}>
              {detailedPreviewComposer.epoch}
            </Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.buttonContainer}>
              <Ionicons
                name="play"
                size={15}
                color="white"
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Open up detailed view</Text>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal={true}
          style={styles.infoContainer}
          showsHorizontalScrollIndicator={false}
        >
          <BubbleInfo title="Birth - Death" value="1170 - 1827" />
          <BubbleInfo title="Works" value="342" />
          <BubbleInfo title="Uploaded Works" value="7" />
          <BubbleInfo title="Created At" value="10.10.2022" />
        </ScrollView>

        <Text style={styles.uploadedWorksTitle}>Uploaded Works</Text>
        <ScrollView style={styles.uploadedWorks}>
          {detailedPreviewSheets.map((sheet) => (
            <TouchableOpacity key={sheet.safeSheetName} onPress={() => {}}>
              <View style={styles.uploadedWorksContainer}>
                <Text style={styles.uploadedWorksText}>{sheet.sheetName}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
  return <></>;
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 0.8,
    borderLeftWidth: 0.75,
    borderColor: colors.GRAY10,
    marginTop: 20,
    paddingTop: 20,
  },
  titleWrapper: {
    alignItems: "center",
    width: "100%",
  },
  thumbnailImage: {
    height: 200,
    width: 200,
    borderRadius: 15,
  },
  textWrapper: {
    alignItems: "center",
    ...globalStyles.mt2,
  },
  subHeading: {
    ...globalStyles.vollkornSubheadline,
    color: colors.GRAY4,
    marginTop: -12,
  },
  buttonContainer: {
    ...globalStyles.mt1,

    flexDirection: "row",
    backgroundColor: colors.BLUE6,
    paddingVertical: 4,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    ...globalStyles.nunitoSansBodySmall,
    marginLeft: 8,
    marginRight: 8,
  },
  buttonIcon: {
    marginTop: 5,
  },

  infoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
    flexGrow: 0,
    marginTop: 30,
  },

  bubbleInfoContainer: {
    backgroundColor: colors.GRAY11,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 15,

    marginHorizontal: 5,
  },
  bubbleInfoTitleStyle: {
    ...globalStyles.vollkornBodySmall,
    color: colors.GRAY5,
  },
  bubbleInfoValueStyle: {
    color: colors.GRAY3,
    ...globalStyles.vollkornSubheadline,
    lineHeight: 19,
  },
  uploadedWorks: {
    marginHorizontal: 30,
  },
  uploadedWorksTitle: {
    ...globalStyles.vollkornSubheadline,
    marginLeft: 30,
    marginTop: 25,
    marginBottom: 10,
  },
  uploadedWorksContainer: {
    backgroundColor: colors.GRAY11,
    padding: 5,
    marginBottom: 15,
    borderRadius: 10,
  },
  uploadedWorksText: {
    fontFamily: "Vollkorn_400Regular",
    fontSize: 16,
    color: "black",
    paddingLeft: 5,
  },
});
