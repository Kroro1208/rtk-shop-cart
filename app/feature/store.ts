import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import modalSlice from "../modal/ModalSlice"

export const store = configureStore({
    reducer: {
        // これによりcartSliceで定義したすべてのreducersが、ストアに登録される
        cart: cartReducer,
        modal: modalSlice
    }
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];