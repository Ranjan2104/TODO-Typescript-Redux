import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from './TodoSlice';

const rootReducer = combineReducers({
    todoData : todoSlice
})

export default rootReducer