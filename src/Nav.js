import React from "react"
import { NavLink } from "react-router-dom"

const Nav = () =>{
    return(
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/cheetos'}>Cheetos</NavLink>
          <NavLink to={'/kitKat'}>KitKat</NavLink>
          <NavLink to={'/snickers'}>Snickers</NavLink>
        </nav>
    )
}

export default Nav;