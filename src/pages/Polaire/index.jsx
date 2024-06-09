import data from '../../data/data.json';
import './polaire.css';
import HabitatPres from '../../components/HabitatPres';
import Animaux from '../../components/Animaux';
const Polaire = () => {
  const habitat=data.habitats[4]
    return (
      <div className="container">
          
      <HabitatPres habitat={habitat}/>  
      <Animaux habitat={habitat}/>
</div>
    )}
      export default Polaire