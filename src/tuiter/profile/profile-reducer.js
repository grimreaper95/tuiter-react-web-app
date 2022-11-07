import { createSlice } from "@reduxjs/toolkit";
import userData from "./user.json";


const userSlice = createSlice({
    name: 'userDetails',
    initialState: userData,
    reducers: {
        saveProfile(state, action) {
            return state = action.payload;
        }
    }
});

export const {saveProfile} = userSlice.actions;
export default userSlice.reducer;