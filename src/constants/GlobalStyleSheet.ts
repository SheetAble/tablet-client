import { StyleSheet } from "react-native";
import { colorList } from "./ColorList";

export const colors = {
  ...colorList,
  PRIMARY: colorList.BLUE6,
  PRIMARY_LIGHT: colorList.BLUE8,
};

const spacingValues = [0, 5, 10, 20, 40];

export const globalStyles = StyleSheet.create({
  // General
  shadowBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

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

  // Spacing
  m0: { margin: spacingValues[0] },
  mt0: { marginTop: spacingValues[0] },
  mr0: { marginRight: spacingValues[0] },
  mb0: { marginBottom: spacingValues[0] },
  ml0: { marginLeft: spacingValues[0] },
  mv0: { marginVertical: spacingValues[0] },
  mh0: { marginHorizontal: spacingValues[0] },

  m1: { margin: spacingValues[1] },
  mt1: { marginTop: spacingValues[1] },
  mr1: { marginRight: spacingValues[1] },
  mb1: { marginBottom: spacingValues[1] },
  ml1: { marginLeft: spacingValues[1] },
  mv1: { marginVertical: spacingValues[1] },
  mh1: { marginHorizontal: spacingValues[1] },

  m2: { margin: spacingValues[2] },
  mt2: { marginTop: spacingValues[2] },
  mr2: { marginRight: spacingValues[2] },
  mb2: { marginBottom: spacingValues[2] },
  ml2: { marginLeft: spacingValues[2] },
  mv2: { marginVertical: spacingValues[2] },
  mh2: { marginHorizontal: spacingValues[2] },

  m3: { margin: spacingValues[3] },
  mt3: { marginTop: spacingValues[3] },
  mr3: { marginRight: spacingValues[3] },
  mb3: { marginBottom: spacingValues[3] },
  ml3: { marginLeft: spacingValues[3] },
  mv3: { marginVertical: spacingValues[3] },
  mh3: { marginHorizontal: spacingValues[3] },

  m4: { margin: spacingValues[4] },
  mt4: { marginTop: spacingValues[4] },
  mr4: { marginRight: spacingValues[4] },
  mb4: { marginBottom: spacingValues[4] },
  ml4: { marginLeft: spacingValues[4] },
  mv4: { marginVertical: spacingValues[4] },
  mh4: { marginHorizontal: spacingValues[4] },

  p0: { padding: spacingValues[0] },
  pt0: { paddingTop: spacingValues[0] },
  pr0: { paddingRight: spacingValues[0] },
  pb0: { paddingBottom: spacingValues[0] },
  pl0: { paddingLeft: spacingValues[0] },
  pv0: { paddingVertical: spacingValues[0] },
  ph0: { paddingHorizontal: spacingValues[0] },

  p1: { padding: spacingValues[1] },
  pt1: { paddingTop: spacingValues[1] },
  pr1: { paddingRight: spacingValues[1] },
  pb1: { paddingBottom: spacingValues[1] },
  pl1: { paddingLeft: spacingValues[1] },
  pv1: { paddingVertical: spacingValues[1] },
  ph1: { paddingHorizontal: spacingValues[1] },

  p2: { padding: spacingValues[2] },
  pt2: { paddingTop: spacingValues[2] },
  pr2: { paddingRight: spacingValues[2] },
  pb2: { paddingBottom: spacingValues[2] },
  pl2: { paddingLeft: spacingValues[2] },
  pv2: { paddingVertical: spacingValues[2] },
  ph2: { paddingHorizontal: spacingValues[2] },

  p3: { padding: spacingValues[3] },
  pt3: { paddingTop: spacingValues[3] },
  pr3: { paddingRight: spacingValues[3] },
  pb3: { paddingBottom: spacingValues[3] },
  pl3: { paddingLeft: spacingValues[3] },
  pv3: { paddingVertical: spacingValues[3] },
  ph3: { paddingHorizontal: spacingValues[3] },

  p4: { padding: spacingValues[4] },
  pt4: { paddingTop: spacingValues[4] },
  pr4: { paddingRight: spacingValues[4] },
  pb4: { paddingBottom: spacingValues[4] },
  pl4: { paddingLeft: spacingValues[4] },
  pv4: { paddingVertical: spacingValues[4] },
  ph4: { paddingHorizontal: spacingValues[4] },
});
