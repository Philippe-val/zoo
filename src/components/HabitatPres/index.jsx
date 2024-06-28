import React from 'react'
import './habitatpres.css'
const HabitatPres = ({ habitat }) => {
  return (
    <>
    <div className="habitat-title">
    <h1>{habitat.title}</h1>  
     </div>
      <div className ="habitat-container">
       
        <div className="habitat-texte">
          <p className='habitat-para'>{habitat.description}</p> 
        </div>
        <div className='habitat-photo'>  
            <img src={habitat.img2}  alt="" />  
        </div> 
      </div>
      </>
  )
}

export default HabitatPres