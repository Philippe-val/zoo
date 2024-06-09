import React from 'react'
import './habitatpres.css'
const HabitatPres = ({ habitat }) => {
  return (
    
      <div className ="savane-container">
        
      <div className="savane-texte">
        <h1 className="savane-title">{habitat.title}</h1> 
      
          <p className='savane-para'>{habitat.description}</p> 
      </div>
      
    
            <img src={habitat.img2} className='savane-photo' alt="" />
    
  
    
    </div>

  

    
    
    

    
    
    
  )
}

export default HabitatPres