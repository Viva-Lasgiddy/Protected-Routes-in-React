import React from "react"
import {Outlet} from 'react-router-dom'
import SideNav from "../components/navigations/side/SideNav"

const MainLayout = ()=>{
    return(
        <div id="layout">
            <div id="display">
                  <Outlet/>
            </div>
            <div id="sidenav">
                 <SideNav/>
            </div>
          
           
        </div>
    )

}

export default MainLayout