import React from 'react'
import './Sectiontwo.css'
import leadway from '../../assets/images/images/leadway.png'
import stallion from '../../assets/images/images/stallion.png'
import fmn from '../../assets/images/images/fmn.png'
import takagro from '../../assets/images/images/tak agro.png'
import fcmb from '../../assets/images/images/fcmb.png'
import sterling from '../../assets/images/images/sterling.png'
import afex from '../../assets/images/images/afex.png'
import usaid from '../../assets/images/images/usaid.png'
import romoil from '../../assets/images/images/rom oil.png'
import amobyng from '../../assets/images/images/amo byng.png'
import indorama from '../../assets/images/images/indorama.png'
import worldfp from '../../assets/images/images/worldfp.png'
import premier from '../../assets/images/images/premier feed mills.png'
import kobo from '../../assets/images/images/kobo.png'
import wacot  from '../../assets/images/images/wacot ltd.png'
import syngenta from '../../assets/images/images/syngenta.png'
import technoserve from '../../assets/images/images/technoserve.png'
import ocp from '../../assets/images/images/ocp.png'


function Sectiontwo() {
    return (
        <div>
            <div>
                <h1 class='sec2a'>Our Partners</h1>
            </div>
            { <div class='images'>
                <div class='row1'>
                    <img class='leadway'src={leadway} />
                    <img src={stallion} />
                    <img src={fmn} />
                    <img class='takagro'src={takagro} />
                    <img src={fcmb} />
                    <img src={sterling} />
                
                </div>
                <div class='row2'>
                    <img class='afex' src={afex} />
                    <img src={usaid} />
                    <img src={romoil} />
                    <img src={amobyng} />
                    <img src={indorama} />
                    <img src={worldfp} />

                </div>
                <div class='row3'>
                    <img src={premier} />
                    <img src={kobo} />
                    <img src={wacot} />
                    <img src={syngenta} />
                    <img src={technoserve} />
                    <img src={ocp} />

                </div>
                    

                </div> }
        </div>
    )
}

export default Sectiontwo
