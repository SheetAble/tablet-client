import { Sheet } from "../redux/slicers/data/dataSlice";

export type RootStackParamList = {
  // TabNavigator Root
  TabNavigator: undefined;

  // Main Screens
  Home: undefined;
  Counter: undefined;
  Sheets: undefined;
  Composers: undefined;
  Collections: undefined;
  Settings: undefined;

  // Functional Screens
  Sheet: Sheet;
};
