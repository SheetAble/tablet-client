import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Composer, Sheet } from "../../redux/slicers/data/dataSlice";
import axios from "axios";
import { colors, globalStyles } from "../../constants/GlobalStyleSheet";
import { useAppDispatch } from "../../redux/store";
import { addDetailedPreview } from "../../redux/slicers/ui/uiSlice";

export default function ComposerCard({
  composer,
  first,
}: {
  composer: Composer;
  first: boolean;
}) {
  // To remove shadow when button is pressed
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <TouchableWithoutFeedback
      onPressIn={() => {
        setIsPressed(true);
        dispatch(addDetailedPreview(composer));
      }}
      onPressOut={() => setIsPressed(false)}
      key={composer.safeName}
    >
      <View
        style={[
          styles.cardWrapper,
          isPressed && { shadowOpacity: 0.35, shadowRadius: 1.5 },
          first && { marginLeft: 10 },
        ]}
      >
        <Image
          source={{
            uri: composer.portraitUrl,
          }}
          style={styles.thumbnailImage}
        />
        <View style={styles.textInfo}>
          <Text numberOfLines={1} style={styles.composerNameText}>
            {composer.name}
          </Text>
          <Text numberOfLines={1} style={styles.epochText}>
            {composer.epoch}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: colors.WHITE2,
    borderRadius: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    ...globalStyles.mr3,
    ...globalStyles.mb3,
    ...globalStyles.mt2,
    ...globalStyles.shadowBox,
  },
  thumbnailImage: {
    height: 125,
    width: 125,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textInfo: {
    paddingLeft: 5,
    paddingBottom: 10,
  },
  composerNameText: {
    ...globalStyles.vollkornBodySmall,
    paddingTop: 2,
    maxWidth: 130, // So the text won't overflow
  },
  epochText: {
    fontFamily: "Vollkorn_400Regular",
    fontSize: 10,
    color: colors.GRAY5,
    lineHeight: 11,
  },
});
