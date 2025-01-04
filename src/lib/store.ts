import { configureStore } from "@reduxjs/toolkit";
import ThemeChangeReducer from "./features/ThemeChange/ThemeChangeSlice";

const store = configureStore({
    reducer: {
        ThemeChange: ThemeChangeReducer,
    }
})

export default store;