import { configureStore } from "@reduxjs/toolkit";
import ThemeChangeReducer from "./features/ThemeChange/ThemeChangeSlice";

const storeData = configureStore({
    reducer: {
        themeChange: ThemeChangeReducer,
    }
})

export default storeData;
export type RootState = ReturnType<typeof storeData.getState>;
export type AppDispatch = typeof storeData.dispatch;