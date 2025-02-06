import { createSlice } from "@reduxjs/toolkit"
import { productsData } from "../../type"

interface UserInfo{
    _id:string,
    name:string,
    email:string,
    
}

interface InitialState{
    cart:productsData[],
    wishlist:productsData[],
    userInfo:UserInfo | null,
}

const initialState:InitialState = {
    cart:[],
    wishlist:[],
    userInfo:null,

}

export const buynbuySlice = createSlice({
    name:'buynbuy',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct = state.cart.find((item:any)=>item._id === action.payload._id);
            if(existingProduct){
                existingProduct.quantity += 1;
        }
        else{
            state.cart.push(action.payload);
        }
    },
    increaseQuantity:(state,action)=>{
        const existingProduct = state.cart.find((item:any)=>item._id === action.payload);
        if(existingProduct){
            existingProduct.quantity += 1;
        }
    },
    decreaseQuantity:(state,action)=>{
        const existingProduct = state.cart.find((item:any)=>item._id === action.payload);
        if(existingProduct){
            existingProduct.quantity -= 1;
        }
    },
    removeFromCart:(state,action)=>{
        state.cart = state.cart.filter((item:any)=>item._id !== action.payload);
    },
    resetCart:(state)=>{
        state.cart = [];
    },
    addToWishlist:(state,action)=>{
        const existingProduct = state.wishlist.find((item:any)=>item._id === action.payload._id);

        state.cart.push(action.payload);
    },
    resetWishlist:(state)=>{
        state.wishlist = [];
    },
    removeFromWishlist:(state,action)=>{
        state.wishlist = state.wishlist.filter((item:any)=>item._id !== action.payload);
    },
    addUserInfo:(state,action)=>{
        state.userInfo = action.payload;
    },
    removeUserInfo:(state)=>{
        state.userInfo = null;
    }
}});

export const {addToCart,increaseQuantity,decreaseQuantity,removeFromCart,resetCart,addToWishlist,resetWishlist,removeFromWishlist,addUserInfo,removeUserInfo} = buynbuySlice.actions
export default buynbuySlice.reducer