import { StyleSheet } from "react-native";
import { colorList } from "./ColorList";

export const colors = {
  ...colorList,
  PRIMARY: colorList.BLUE6,
  PRIMARY_LIGHT: colorList.BLUE8,
};

export const globalStyles = StyleSheet.create({
  // Typograhpy
  nunitoSansTitle1: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 60,
    lineHeight: 72,
  },
  nunitoSansTitle2: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 48,
    lineHeight: 56,
  },
  nunitoSansTitle3: {
    fontFamily: "NunitoSans_800ExtraBold",
    fontSize: 34,
    lineHeight: 40,
  },
  nunitoSansHeadline: {
    fontFamily: "NunitoSans_800ExtraBold",
    fontSize: 24,
    lineHeight: 32,
  },
  nunitoSansSubheadline: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 18,
    lineHeight: 32,
  },
  nunitoSansBody: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  nunitoSansBodyBold: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 16,
    lineHeight: 24,
  },
  nunitoSansBodySmall: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 14,
    lineHeight: 24,
  },
  nunitoSansBodySmallBold: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    lineHeight: 24,
  },
  nunitoSansCaption: {
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: 12,
    lineHeight: 16,
  },
  nunitoSansButtonLarge: {
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: 16,
    lineHeight: 24,
  },
  nunitoSansButtonMedium: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 14,
    lineHeight: 16,
  },
  nunitoSansButtonSmall: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 12,
    lineHeight: 16,
  },

  vollkornTitle1: {
    fontFamily: "Vollkorn_700Bold",
    fontSize: 60,
    lineHeight: 72,
  },
  vollkornTitle2: {
    fontFamily: "Vollkorn_700Bold",
    fontSize: 48,
    lineHeight: 56,
  },
  vollkornTitle3: {
    fontFamily: "Vollkorn_700Bold",
    fontSize: 34,
    lineHeight: 40,
  },
  vollkornHeadline: {
    fontFamily: "Vollkorn_700Bold",
    fontSize: 24,
    lineHeight: 32,
  },
  vollkornSubheadline: {
    fontFamily: "Vollkorn_700Bold",
    fontSize: 18,
    lineHeight: 32,
  },
  vollkornBody: {
    fontFamily: "Vollkorn_400Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  vollkornBodyBold: {
    fontFamily: "Vollkorn_700Bold",
    fontSize: 16,
    lineHeight: 24,
  },
  vollkornBodySmall: {
    fontFamily: "Vollkorn_400Regular",
    fontSize: 14,
    lineHeight: 24,
  },
  vollkornBodySmallBold: {
    fontFamily: "Vollkorn_700Bold",
    fontSize: 14,
    lineHeight: 24,
  },
  vollkornCaption: {
    fontFamily: "Vollkorn_600SemiBold",
    fontSize: 12,
    lineHeight: 16,
  },
});
