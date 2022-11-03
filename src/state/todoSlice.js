import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        data: JSON.parse(localStorage.getItem('todo')) || []
    },
    reducers: {
        addTodo: (state, action) => {

            state.data.push({ text: action.payload, status: false, id: Date.now() })
        },
        deleteTodo: (state, action) => {
            const newArr = state.data.filter((item) => item.id !== action.payload)
            state.data = newArr
        },
        changeStatus: (state, action) => {
            const newArr = state.data.map((item) => item.id !== action.payload)
            state.data = newArr
        },
        editTodo: (state, action) => {
            const newArr = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, text: action.payload.newText }
                }
                return item
            })
            state.data = newArr
        }
    }
});

export const todoSliceReducer = todoSlice.reducer;
export const todoSliceActions = todoSlice.actions;