import React from 'react'
import Icon from '../../images/Icon.png';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import bottom from '../../images/BOTTOM.png'
import '../../components/footer/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__links'>
            <div className='footer__content'>
            <div className='links__img'>
                <img src={Icon}/>
                <p>E-Comm</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Odit assumenda minima dolor ipsum alias dolorem recusandae <br></br>sequi. Alias a repellat similique assumenda.<br></br> Laboriosam porro cumque doloremque! Atque non a quis!</p>
        </div>

        <div className='text'>
            <span>Follow Us</span>
            <p>Since the 1500s, when an unknown<br></br> 
                printer  took a galley of type<br></br>
                 and scrambled.</p>
                 <div className='text__icons'>
                    <img src={twitter}/>
                    <img src={facebook}/>
                 </div>
        </div>

        <div className='text'>
            <span>Contact Us</span><br></br>
            E-Comm , 4578 <br></br>Marmora Road,<br></br> Glasgow D04 89GR
        </div>
        </div>
        <div className='bottom'>
<img src={bottom}/>
</div>
    </div>
  )
}

export default Footer