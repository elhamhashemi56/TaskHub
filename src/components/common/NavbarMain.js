
import React from 'react'
import {  useEffect, useState } from "react";
import { matchPath, useLocation } from "react-router";
import { ROUT_LIST } from "./Main";
// import { matchPath,useLocation } from 'react-router-dom';

const NavbarMain=()=>{

    const location = useLocation();
    const [pageTitle,setPageTitle]=useState("")
    // console.log("location",location);
    useEffect(()=>{
        ROUT_LIST.forEach(item=>{
            const match = matchPath(location.pathname, {
                path: item.path,
                exact: true
              });

              console.log("item.path: ", item.path);
              console.log("location.pathname: ", location.pathname);
              console.log("match: ", match);
        
              if (match && match.params) {
                setPageTitle(item.title);
              }
        })
      },[location.pathname])

    return (
       <h1>{pageTitle}</h1>
    )
}

export default NavbarMain