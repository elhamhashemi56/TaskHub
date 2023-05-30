import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo.slice";
import layotSliceSidebar from "./slice/layot.slice"

const store=configureStore({
    reducer:{
        todoSlice:todoReducer,
        layotSlice:layotSliceSidebar
    }
})

export default store