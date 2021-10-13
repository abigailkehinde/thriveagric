import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div class='footerdiv'>
            <div >
                <h2 class='footer1'>Our Goal</h2>
                <p>The goal for us is to create a self<br/>
                 sufficient Africa that feeds itself and <br/>
                  the world. We are doing this by <br/>
                   linking African farmers to capital,<br/>               
                   data driven best practices and <br/>
                    access to local and global market <br/>
                     for their commodity.</p>
            </div>
            <div>
                <h2 class='footer1'>Contact Us</h2>
                <p>31, 441 Crescent,<br/>
                    CITEC Villas,<br/>
                     Gwarinpa, Abuja,<br/>
                      Nigeria.<br/><br/>
                       info@thriveagric.com<br/>
                       +234 (0) 816 716 4014</p>
            </div>
            <div>
                <h2 class='footer1'>Join Our Community</h2>
                <p>We will love to reach you! Subscribe<br/>
                 to get exciting news and stories of<br/>
                  all the work we are doing to<br/>
                   empower farmers and ensure<br/>
                    global food security.<br/><br/>
                    <input name="email" type="email" class="input2" placeholder="Email " value=""></input><br/>
                    <button type="button" class='button'>Subscribe</button>
                     
                </p>
            </div>
            <div>
                <h2 class='footer1'>More Links</h2>
                Contact Us<br/><br/>
                Our Blog<br/><br/>
                Careers<br/><br/>
            </div>
            
        </div>
    )
}

export default Footer
