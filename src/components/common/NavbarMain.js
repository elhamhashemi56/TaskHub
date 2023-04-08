
import React from 'react'
import {  useState } from "react";
import { useLocation } from "react-router";
import { ROUT_LIST } from "./Main";
import "./navbarMain.css"
// import { matchPath,useLocation } from 'react-router-dom';

const NavbarMain=()=>{

    const location = useLocation();
    const [pageTitle,setPageTitle]=useState("")
    // console.log("location",location);

    React.useEffect(() => {
      ROUT_LIST.forEach((item) => {
        if (location.pathname === item.path) {
          setPageTitle(item.title);
        }
      });
    }, [location]);

    return (
      <nav className='nav_container'>
        <div>
          <h1 className='titleH1'>{pageTitle}</h1>
        </div>
        <div className='nav_right'>
          Right Navbar
        </div>
      </nav>
      
    )
}

export default NavbarMain