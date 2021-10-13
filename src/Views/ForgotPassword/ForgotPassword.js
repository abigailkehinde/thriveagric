import React from 'react'
import './ForgotPassword.css'
import thrivelogo from '../../assets/images/images/thrivelogo.png'

function ForgotPassword() {
    return (
        <div class='fp'>
            <img  src={thrivelogo}  />
            <h1 class='fpb'>Forgot Password.</h1>
        <form class='fpa'>
            <input name="email" type="email" class="input3" placeholder="Email " value=""></input><br/>
        </form>
        <div class='fpa'><button type="button" class='button'>Submit</button></div> 
        </div>
    )
}

export default ForgotPassword
