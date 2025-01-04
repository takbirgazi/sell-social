import { createSlice } from "@reduxjs/toolkit";

const ThemeChange = createSlice({
    name: "ThemeChange",
    initialState: 0,
    reducers: {
        changeTheme: (state) => {
            return state + 1;
        }
    }
})

export const { changeTheme } = ThemeChange.actions;
export default ThemeChange.reducer;