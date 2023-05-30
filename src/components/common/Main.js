import React from 'react'
import NavbarMain from "./NavbarMain"
import Inbox from "../page/Inbox"
import Today from "../page/Today"
import Upcoming from "../page/Upcoming"
import FilterLabels from "../page/FilterLabels"
import {Navigate, Route, Routes} from "react-router-dom";
import { useSelector } from 'react-redux'
import "./main.css"

export const ROUT_LIST=[
    {
        title:"Inbox",
        path:"/inbox",
        element:Inbox
    },
    {
        title:"Today",
        path:"/today",
        element:Today
    },
    {
        title:"Upcoming",
        path:"/upcoming",
        element:Upcoming
    },
    {
        title:"Filter & Labels",
        path:"/filterLabels",
        element:FilterLabels
    },
]





const Main = () => {

    const {openSidebar,closeSidebar}=useSelector(store=>{
        return {
          openSidebar:store.layotSlice.isOpenSidebar,
          closeSidebar:store.layotSlice.isCloseSidebar
        }
      })
      
    return (
        <div id='main' className={`page-content ${closeSidebar ? '' : 'page-content-shifted'}`}>
            <NavbarMain />
            <Routes>
                {ROUT_LIST.map(item=><Route path={item.path} exact={true} element={<item.element/>} />)}
                <Route exact path='/' element={<Navigate to={"/inbox"}/>}></Route>
            </Routes>
            {/* <Routes>
                <Route exact path='/' element={<Navigate to={"/inbox"}/>}></Route>
                <Route path='/inbox' element={<Inbox/>}></Route>
                <Route path='/today' element={<Today/>}></Route>
                <Route path='/upcoming' element={<Upcoming/>}></Route>
                <Route path='/filterLabels' element={<FilterLabels/>}></Route>
            </Routes> */}
        </div>

    )

}

export default Main
