import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../../utils/types";
// import { allProducts } from "../../utils/types";


interface CartState {
    items: allProducts[];
}

const initialState:CartState = {
    items:[]
}


export const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action:PayloadAction<allProducts>) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(index,1);
        }
    }
})

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer