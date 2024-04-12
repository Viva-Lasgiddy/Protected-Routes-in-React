import React from 'react'
import {NavLink} from 'react-router-dom'

const Links = ({to,icon,label}) => {
  return (

      <NavLink id='link' to={to}>
        <span>{icon}</span>
        <span>{label}</span>
      </NavLink>
  )
}

export default Links
