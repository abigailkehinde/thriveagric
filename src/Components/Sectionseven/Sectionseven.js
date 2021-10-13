import React from 'react'
import './Sectionseven.css'
import thrivelogo from '../../assets/images/images/thrivelogo.png'
import { NavLink } from 'react-router-dom'


function Sectionseven() {
    return (
        <div class='sectionsevena'>
            <img src={thrivelogo} />
            <p class='sectionsevenc'>Sign In.</p>
            <form>
                <input name="email" type="email" class="input3" placeholder="Email " value=""></input><br/>
                <input name="password" type="password" class="input3" placeholder="password" value=""></input><br/>
            </form>

            <div class='sectionsevenb'>
                <div><button type="button" class='button'>Sign In</button></div> 
                
                 <div><NavLink to="/Forgotpassword">Forgot Password</NavLink></div>
                 </div>
            
            <div class='tc'><NavLink to="/TandC">Terms and Condition</NavLink> | <NavLink to="/ContactUs">Contact Us</NavLink></div>
            
            
        
        </div>
        
    )
}

export default Sectionseven
