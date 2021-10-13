import React from 'react'
import './Sectionfive.css'
import vp from '../../assets/images/images/vicepresident.png'
import harvard from '../../assets/images/images/harvardbusiness.png'
import netpreneur from '../../assets/images/images/netpreneur.png'
import pitch from '../../assets/images/images/pitch.png'
import wfp from '../../assets/images/images/wfp.png'


function Sectionfive() {
    return (
        <div class='five'> 
            <div class='fivea'> 
              <div class='vp'>
                <img class='vp' src={vp} />
                <p class='vp2'>We shared our work with Vice President,<br/> Yemi Osinbajo</p>
              </div>
        
              <div class='harvard'>
                  <img class='harvard' src={harvard} />
                  <p class='harvard2'>Our CEO, Uka Eje speaking at the Havard <br/> Business School</p>
              </div>

              <div class='netpreneur'>
                  <img class='netpreneur' src={netpreneur} /></div>
                  <p class='netpreneur2'>Uka Eje and Ayodeji Arikawe at the ,<br/> Netpreneur Prize Finale</p>
            </div>

           <div class='fiveb'>
               <div class='pitch'>
                   <img class='pitch' src={pitch} />
                   <p class='pitch2'>We Pitched at the Palace of the Duke Of <br/> York</p>
               </div>

               <div class='wfp'>
                    <img class='wfp' src={wfp} />
                    <p class='wfp2'>Ayo Arikawe at World Food Programme’s<br/> innovation 2020</p>
               </div>
              
            </div>
            
        </div>
    )
}

export default Sectionfive
