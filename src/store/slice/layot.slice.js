import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:"hamburger",
    initialState:{
        isOpenSidebar:true,
        isCloseSidebar:false
    },
    reducers:{
        setIsOpenSidebar(state,action){
            state.isOpenSidebar=action.payload
        },
        setIsCloseSidebar(state,action){
            state.isCloseSidebar=action.payload
        }
    }
})

export default slice.reducer
export const {setIsOpenSidebar,setIsCloseSidebar} =slice.actions