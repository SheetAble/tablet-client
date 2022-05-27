import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"


type User = {
	name: string,
	age: number,
	id: number
}

type UserPayload = {
	name: string,
	age: number,
}

interface UserListState {
	list: User[]
}

const initialState: UserListState = {
	list: []
}

export const userListSlice = createSlice({
	name: "userList",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<UserPayload>) => {
			state.list.push({
				name: action.payload.name,
				age: action.payload.age,
				id: state.list.length
			})
		}
	}
})

export const {addUser} = userListSlice.actions

export const selectUserList = (state: RootState) => state.userlist.list

export default userListSlice.reducer