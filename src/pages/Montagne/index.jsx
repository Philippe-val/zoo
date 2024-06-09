import data from '../../data/data.json';
import './montagne.css';
import HabitatPres from '../../components/HabitatPres';
import Animaux from '../../components/Animaux';
const Montagne = () => {
  const habitat=data.habitats[3]
    return (
      <div className="container">
          
      <HabitatPres habitat={habitat}/>  
      <Animaux habitat={habitat}/>
</div>
    )}
      export default Montagne