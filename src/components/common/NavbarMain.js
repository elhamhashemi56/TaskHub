
import React from 'react'
import {  useEffect, useState } from "react";
import { matchPath, useLocation } from "react-router";
import { ROUT_LIST } from "./Main";
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
       <h1>{pageTitle}</h1>
    )
}

export default NavbarMain