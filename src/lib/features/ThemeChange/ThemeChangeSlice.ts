import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    const isDark = localStorage.getItem("isDark");
    if (!isDark) {
        localStorage.setItem("isDark", "true");
        return true;
    } else {
        if (isDark == "true") {
            return true;
        } else {
            return false;
        }
    }
}

const ThemeChange = createSlice({
    name: "ThemeChange",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state = action.payload;
            localStorage.setItem("isDark", state.toString());
            return state;
        }
    }
})

export const { changeTheme } = ThemeChange.actions;
export default ThemeChange.reducer;