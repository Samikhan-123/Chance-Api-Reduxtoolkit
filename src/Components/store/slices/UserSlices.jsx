import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
            console.log(action.payload)
        },
        removeUser: (state, action) => {
            state.splice(action.payload, 1)
            console.log(action.payload)


        },
        clearAllUsers: (state, action) => {
            return [];
        },

    },
})
// console.log(userSlice.actions, 'hello');
export default userSlice;
export const { addUser, removeUser, clearAllUsers } = userSlice.actions
