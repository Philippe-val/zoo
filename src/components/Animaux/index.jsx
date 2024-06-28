
import AnimalCard from '../AnimalCard'
import './animaux.css'

const Animaux = ({ habitat }) => {
  return ( 
    <div className="container-animaux">
    {habitat.animaux.map((animal) => (
      <AnimalCard key={animal.title} animal={animal} />
    ))}
     </div>
  )
}

export default Animaux