import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  addUser,
  getVersionAsync,
  selectUserList,
  selectVersion,
} from "../redux/slicers/userList/userListSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { colors, globalStyles } from "../constants/GlobalStyleSheet";
import { NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screens/mainScreens/RootStackParams";

type counterScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Counter"
>;

interface AppProps {
  navigation: counterScreenProp;
}

export function UserList({ navigation }: AppProps) {
  const userlist = useAppSelector(selectUserList);
  const version = useAppSelector(selectVersion);
  const dispatch = useAppDispatch();

  const list = () => {
    return userlist.map((user) => {
      return (
        <View key={user.id} style={{ margin: 10 }}>
          <Text>{user.name}</Text>
          <Text>{user.age}</Text>
          <Text>{user.id}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.userListWrapper}>
      <View style={styles.conWrap}>
        <Text style={[styles.text]}>Hdaello</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Create User"
          onPress={() =>
            dispatch(
              addUser({
                name: "Valle",
                age: 21,
              })
            )
          }
        />
        <Button
          title="Get Version"
          onPress={() => dispatch(getVersionAsync())}
        />
      </View>
      <Text>{version}</Text>
      <Text style={styles.text}>{list()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userListWrapper: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  conWrap: {
    flexDirection: "row",
    width: "60%",
    height: "40%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    ...globalStyles.vollkornTitle3,
  },
});
