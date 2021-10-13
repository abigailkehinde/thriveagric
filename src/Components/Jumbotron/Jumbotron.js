import React from 'react'
import './Jumbotron.css'
import logo from '../../assets/images/images/farmer.jpg'

function Jumbotron() {
    return (
        <div class='header'>
            <img class='jumbotron' src={logo} />
            <h1 class='headerone'>Building an Africa <br/>that feeds herself<br/>
                and the World.<br/>
                <button type="button" class='button'>Learn More</button></h1>  
                
            
        </div>
    )
}

export default Jumbotron
