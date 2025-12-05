
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = `https://692d3c42e5f67cd80a4aa90c.mockapi.io/carts`

export const fetchCart = createAsyncThunk('carts/fetch',async ()=>{
    const res = await axios.get(`${API_URL}/${1}`)
    return res?.data;
})

export const addToCart = createAsyncThunk('carts/add',async (newProduct)=>{
    console.log(newProduct)
})

export const removeFromCart = createAsyncThunk('carts/remove',async (newProduct)=>{

})

export const updateCart = createAsyncThunk('carts/update',async (newProduct)=>{

})


const cartSlice = createSlice({
    name: 'carts',
    initialState: {totalPrice: 0, name: '', cartItems: []},
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCart.fulfilled, (state,action)=>{
            state.cartItems = action.payload.cartItems;
        })
        .addCase(addToCart.fulfilled, (state,action)=>{
            state.cartItems = action.payload;
        })
        .addCase(removeFromCart.fulfilled, (state,action)=>{
        })
        .addCase(updateCart.fulfilled, (state,action)=>{
        })
    }
})

export default cartSlice.reducer;
