import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Define Data Interface
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
}

const API_URL = 'https://692d3c42e5f67cd80a4aa90c.mockapi.io/todos'; 

// 2. Thunks (API Calls)
export const fetchTodos = createAsyncThunk('todos/fetch', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

export const addTodo = createAsyncThunk('todos/add', async (newTodo: Todo) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
  });
  return response.json();
});

export const deleteTodo = createAsyncThunk('todos/delete', async (id: string) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  return id;
});

export const updateTodo = createAsyncThunk('todos/update', async ({ id, completed }: { id: string; completed: boolean }) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: !completed }),
  });
  return response.json();
});

export const updateContent = createAsyncThunk('todos/updateContent', async ({id, title} : {id: string; title: string}) => {
    const response = await fetch(
        `${API_URL}/${id}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title }),
        }
    );
    return response.json();
})

// 3. Slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] as Todo[] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(updateContent.fulfilled, (state, action) => {
        console.log("Update Content fulfilled:", action.payload);
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      });
  },
});

export default todoSlice.reducer;

