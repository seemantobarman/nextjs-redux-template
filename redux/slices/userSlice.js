import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "null",
};

const userSlice = createSlice({
    //Slice Name
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username;
        },
        logoutUser: (state) => {
            state.username = null;
        },
    },
});

//These are the actions
export const { setUser, logoutUser } = userSlice.actions;

//This is the state value
export const selectUsername = (state) => state.user.username;

//This is the reducer
export default userSlice.reducer;
