import React from 'react'
import NavbarMain from "./NavbarMain"
import Inbox from "../page/Inbox"
import Today from "../page/Today"
import Upcoming from "../page/Upcoming"
import FilterLabels from "../page/FilterLabels"
import {Navigate, Route, Routes} from "react-router-dom";

const Main = () => {

    return (
        <div id='main'>
            <NavbarMain/>
            <Routes>
                <Route exact path='/' element={<Navigate to={"/inbox"}/>}></Route>
                <Route path='/inbox' element={<Inbox/>}></Route>
                <Route path='/today' element={<Today/>}></Route>
                <Route path='/upcoming' element={<Upcoming/>}></Route>
                <Route path='/filterLabels' element={<FilterLabels/>}></Route>
            </Routes>
        </div>

    )

}

export default Main
