import React from 'react'
// css 
import "./Navbar.css"
// icons 
import { BiCategoryAlt } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { FaUser,FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = ({setState,state}) => {

  return (
    <>
    <nav className='navbar'>
        <div className="container">
            <NavLink to="/" className='logo'>
                <h1><span>M</span> maiz market</h1>
            </NavLink>
            <div className="cotegory">
            <BiCategoryAlt /><span>Category</span>
            </div>
            <div className="search">
              <input type="search" placeholder='Search' />
              <button><IoSearch /></button>
            </div>  
            <div className="login" onClick={()=>setState(!state)}>
            <FaUser /> <span>Login</span>
            </div>
            <NavLink to="/like" className="like">
                <FaHeart/>
                <span>Like</span>
            </NavLink>
            <NavLink to="/cart" className="basket">
            <FaCartShopping />
            <span>Cart</span>
            </NavLink>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar