import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todoData: JSON.parse(localStorage.getItem("todo")) ? JSON.parse(localStorage.getItem("todo")) : []
    },
    reducers: {
        addTodoData : (state, action) => {
            state.todoData.push(action.payload);
            localStorage.setItem('todo', JSON.stringify(state.todoData));
        },
        removeData : (state, action) => {
            state.todoData.splice(action.payload.index, 1);
        },
        checkData: (state, action) => {
            const { check, index } = action.payload;
            state.todoData[index].checked = check;
        }
    }
})

export const { addTodoData, removeData, checkData } = todoSlice.actions
export default todoSlice.reducer;
