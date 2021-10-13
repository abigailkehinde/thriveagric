import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css' 
import logo from '../../assets/images/images/thrivelogo.png'






const  Navbar= () =>{
    return (
            <div  className='navbar'>
                <img class= "logo" src={logo} />
                 
                <ul>
                    <li><b><NavLink to="/" className="home">Home</NavLink></b></li>
                    <li><b><NavLink to="/AboutUs">About Us</NavLink></b></li>
                    <li><b><NavLink to="/ContactUs">Contact Us</NavLink></b></li>
                    <li><b><NavLink to="/OurBlog">Our Blog</NavLink></b></li>
                    <li><b><NavLink to="/SignIn">Sign In</NavLink></b></li>

                </ul>
            </div> 
    )
}

export default Navbar
