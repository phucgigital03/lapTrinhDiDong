import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = `https://692d3c42e5f67cd80a4aa90c.mockapi.io/todos`

export const fetchTodos = createAsyncThunk('todos/fetch', async ()=>{
    const res = await axios.get(API_URL);
    return res.data
})

const todoSlice = createSlice({
    name: 'todos',
    initialState: { todos: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action)=>{
            state.todos = action.payload;
        })
    }
})

export default todoSlice.reducer;
