import { Composer, Sheet } from "../redux/slicers/data/dataSlice";

export type RootStackParamList = {
  // TabNavigator Root
  Home: undefined;

  // Main Screens
  HomeFeed: undefined;
  Counter: undefined;
  Sheets: undefined;
  Composers: undefined;
  Collections: undefined;
  Settings: undefined;

  // Functional Screens
  Sheet: Sheet;
  DetailedComposerView: Composer;

  // Auth Screens
  SignIn: undefined;
};
