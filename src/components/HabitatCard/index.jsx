import React from 'react'
import './habitat-card.css'
import { Link } from 'react-router-dom'
const HabitatCard= ({habitat}) => {
  return (
    <div class="card  mb-3 habitat-card" >
    <Link  
     to={`/habitat/${habitat.id_habitat}`}
   
    >
       <div class=" habitat-card-header"> <img src={`/${habitat.IMG}`}  alt="" /> </div>
       <div class="habitat-card-body">
         <h4 class="habitat-card-title">{habitat.TITLE}</h4>
       
       </div>
       </Link>
    </div>
  )
}

export default HabitatCard