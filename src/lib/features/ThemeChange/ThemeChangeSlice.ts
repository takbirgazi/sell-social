import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    if (typeof window !== "undefined") {
        // Only access localStorage on the client
        const isDark = localStorage.getItem("isDark");
        if (!isDark) {
          localStorage.setItem("isDark", "true");
          return true;
        }
        return isDark === "true";
      }
      // Default fallback for SSR
      return true;
    };

const ThemeChange = createSlice({
    name: "ThemeChange",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state = action.payload;
            localStorage.setItem("isDark", state ? "true" : "false");
            return state;
        }
    }
})

export const { changeTheme } = ThemeChange.actions;
export default ThemeChange.reducer;