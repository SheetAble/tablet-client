import {
	Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { addUser, selectUserList } from '../redux/slicers/userList/userListSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

export function UserList ()  {
	
	const userlist = useAppSelector(selectUserList)
	const dispatch = useAppDispatch();

	const list = () => {
		return userlist.map((user) => {
		return (
			<View key={user.id} style={{margin: 10}}>
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
				<Text style={styles.text}>
					Hello
				</Text>
				<Button title='Create User' onPress={() => dispatch(addUser({
					name: "Valle",
					age: 21
				}))}/>
			</View>
			<Text style={styles.text}>
				{list()}	
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	userListWrapper: {
		height: "100%",
		width: "100%",
		alignItems: 'center',
	},
	conWrap: {
		flexDirection: "row",
		width: "30%",
		height: "40%",
		alignItems: "center",
		justifyContent: 'space-between', 
	},
	text: {
	  fontSize: 25
  }
});


