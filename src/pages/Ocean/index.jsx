import data from '../../data/data.json';
import './ocean.css';
import HabitatPres from '../../components/HabitatPres';
import Animaux from '../../components/Animaux';
const Ocean = () => {
  const habitat=data.habitats[5]
    return (
      <div className="container">
          
      <HabitatPres habitat={habitat}/>  
      <Animaux habitat={habitat}/>
</div>
    )}
      export default Ocean