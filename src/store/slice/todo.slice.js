import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:"todo",
    initialState:{
        sections:[],
        todos:[]
    },
    reducers:{
        setSections(state,action){
            state.sections=action.payload
        },
        setTodos(state,action){
            state.todos=action.payload
        }
    }
})

export default slice.reducer
export const {setSections,setTodos}=slice.actions