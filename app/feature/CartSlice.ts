import type { CartState } from "@/type";
import { Products } from "../data/Products";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
    cartItems: Products,
    amount: 1,
    total: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, action: PayloadAction<number>) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload
            );
            if(cartItem) {
                cartItem.amount += 1;
            }
        },
        decrease: (state, action: PayloadAction<number>) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload
            );
            if(cartItem && cartItem.amount > 1) {
                cartItem.amount -= 1;
            }
        },
        caluculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            for (const item of state.cartItems) {
                amount += item.amount
                total += item.amount * item.price             
            };
            state.amount = amount
            state.total = total
        }
    }
});

export const { clearCart, increase, decrease, caluculateTotal, removeItem } = cartSlice.actions;
export default cartSlice.reducer;