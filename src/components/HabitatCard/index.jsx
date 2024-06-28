import React from 'react'
import './habitat-card.css'
import { Link } from 'react-router-dom'
const HabitatCard= ({habitat}) => {
  return (
    <div class="card  mb-3 habitat-card" >
    <Link  
     to="/habitat" 
    state={{habitat:habitat}}
    >
       <div class=" habitat-card-header"> <img src={habitat.img} alt="" /> </div>
       <div class="habitat-card-body">
         <h4 class="habitat-card-title">{habitat.title}</h4>
       
       </div>
       </Link>
    </div>
  )
}

export default HabitatCard