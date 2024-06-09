
import AnimalCard from '../AnimalCard'

const Animaux = ({ habitat }) => {
  return ( 
    <div>
    {habitat.animaux.map((animal) => (
      <AnimalCard animal={animal} />
    ))}
     </div>
  )
}

export default Animaux