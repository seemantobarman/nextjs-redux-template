import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

export default configureStore({
    reducer: {
        //Key is the name of the slice, value is the reducer
        user: userReducer,
    },
});
