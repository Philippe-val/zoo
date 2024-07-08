import React from 'react'
import './animalcard.css'

import { Link } from 'react-router-dom'
const AnimalCard= ({animal}) => {
  return (
    <div class="card  mb-3 animal-card" >
    <Link  
     to="/animal" 
    state={{animal:animal}}
    >
       <div class=" animal-card-header"> <img src={animal.IMG} alt="" /> </div>
       <div class="animal-card-body">
         <h4 class="animal-card-title">{animal.TITLE}</h4>
       
       </div>
       </Link>
    </div>
  )
}
export default AnimalCard