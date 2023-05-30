import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:"hamburger",
    initialState:{
        toggleSidebar:true,
    },
    reducers:{
        setToggleSidebar(state,action){
            state.toggleSidebar=action.payload
        }
    }
})

export default slice.reducer
export const {setToggleSidebar} =slice.actions