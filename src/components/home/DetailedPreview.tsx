import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../../constants/GlobalStyleSheet";
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

  return (
    <View style={styles.mainWrapper}>
      <Text>
        {detailedPreviewComposer
          ? detailedPreviewComposer.name
          : "no composer selected"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 0.8,
    borderLeftWidth: 0.75,
    borderColor: colors.GRAY10,
    marginTop: -20,
    paddingTop: 20,
  },
});
