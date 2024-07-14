import React from 'react'
import why1 from '../../images/why1.png';
import why2 from '../../images/why2.png';
import why3 from '../../images/why3.png';
import '../../components/why/Why.css'


const Why = () => {
  return (
    <div className='why'>
        <div className='why1'>
            <img src={why1}/>
            <p>Lorem Ipsum is simply <br></br>dummy text of the printing <br></br>and typesetting industry.</p>
        </div>

        <div className='why1'>

        <img src={why2}/>
 <p>Lorem Ipsum is simply <br></br>dummy text of the printing <br></br>and typesetting industry.</p>
        </div>

        <div className='why1'>

        <img src={why3}/>
 <p>Lorem Ipsum is simply <br></br>dummy text of the printing <br></br>and typesetting industry.</p>
        </div>

    </div>
  )
}

export default Why