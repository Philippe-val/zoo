
import data from '../../data/data.json';
import './savane.css';
import HabitatPres from '../../components/HabitatPres';
import Animaux from '../../components/Animaux';
const Savane = () => {
  const habitat=data.habitats[0]
    return (
      <div className="container">
      
          
      <HabitatPres habitat={habitat}/>  
      <Animaux habitat={habitat}/>
</div>
    )}
      export default Savane