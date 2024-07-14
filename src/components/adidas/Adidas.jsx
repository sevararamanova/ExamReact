import React from 'react'
import adidas from '../../images/shoes.png';
import '../../components/adidas/Adidas.css'
import { Link } from 'react-router-dom';



const Adidas = () => {
  return (
    <div className='adidas'>
   <img src={adidas}/>
   <div className='content'>
    <h1>Adidas Men Running
<br></br>Sneakers</h1>

<p>Performance and design. Taken right to the edge.</p>

<Link to="/">Shop Now</Link>


   </div>
    </div>
  )
}

export default Adidas