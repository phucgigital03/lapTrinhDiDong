
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const API_URL = 'https://692d3c42e5f67cd80a4aa90c.mockapi.io/orders';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
});

export const addOrder = createAsyncThunk(
    'orders/addOrder',
    async (newOrder)=>{
        const res = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        });
        const data = await res.json();
        return data;
    }
);

export const deleteOrder = createAsyncThunk(
    'orders/deleteOrder',
    async (id)=>{
        const res = await fetch(`${API_URL}/${id}`,{
            method: 'DELETE',
        });
        const data = await res.json();
        console.log('Deleted order:', data);
        if(data.id){
            return data.id;
        }else{
            return -1;
        }
    }
);

export const updateOrder = createAsyncThunk(
    'orders/updateOrder',
    async ({id, tongTien, trangThai})=>{
        const res = await fetch(`${API_URL}/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({tongTien : tongTien, trangThai: trangThai})
        });
        const data = await res.json();
        return data;
    }
);


const ordersSlice = createSlice({
    name: 'orders',
    initialState: { orders: []},
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchOrders.fulfilled, (state,action)=>{
            state.orders = action.payload;
        })
        .addCase(addOrder.fulfilled, (state,action)=>{
            state.orders.push(action.payload);
        })
        .addCase(deleteOrder.fulfilled, (state,action)=>{
            state.orders = state.orders.filter(order => order.id !== action.payload);
        })
        .addCase(updateOrder.fulfilled, (state,action)=>{
            const index = state.orders.findIndex(order => order.id === action.payload.id);
            if(index !== -1){
                state.orders[index] = action.payload;
            }
        })

    }
        
});

export default ordersSlice.reducer;

