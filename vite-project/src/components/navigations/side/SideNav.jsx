import React from 'react'
import Links from '../../links/Links'
import { GrUserAdmin } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { FaUserSecret } from "react-icons/fa6";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BiSolidLogInCircle } from "react-icons/bi";


const SideNav = () => {
    const path = [
        {to: "/settings", Label: "Settings", icon:<CiSettings/>, id:"set"},
        {to: "/user", Label:"User", icon:<FaUserSecret/>, id:"use" },
        {to: "/admin", Label: "Admin", icon:<GrUserAdmin/>, id:"adm"},
        {to: "/login", Label: "Login", icon:<BiSolidLogInCircle/>, id:"log" },
        {to: "/home", Label: "Home", icon:<HiOutlineHomeModern/>, id:"hom" }

    ]
  return (
    <div>
      {path.map((location)=>(
        <Links key={location.id} to={location.to} icon={location.icon} label={location.Label}/>

      ) )}
    </div>
  )
}

export default SideNav
