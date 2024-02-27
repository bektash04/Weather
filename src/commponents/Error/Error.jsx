import React from 'react'
import './Error.css'
import imges from '../Error/sad577.png'
import imged from '../Error/wearch11.png'



const Error = ({weather}) => {

  return (
    <div className='error-weather'> 
    {
     weather.cod === '404' ? <div className='div-error'> <img src={imges} className="error-img" alt="" />This city doesn't exist</div> : <div className='enter-error'><img src={imged} className="error-img-w1" alt=""/>Enter a city in the field above</div>
    } 
  </div>
  )
}

export default Error   
