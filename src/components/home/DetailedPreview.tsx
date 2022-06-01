import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addDetailedPreview,
  selectDetailedPreview,
} from "../../redux/slicers/ui/uiSlice";
import { selectComposers } from "../../redux/slicers/data/dataSlice";

export default function DetailedPreview() {
  const detailedPreviewComposer = useAppSelector(selectDetailedPreview);
  const firstComposer = useAppSelector(selectComposers)[0];
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (detailedPreviewComposer == undefined) {
      dispatch(addDetailedPreview(firstComposer));
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
        </View>
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
});
