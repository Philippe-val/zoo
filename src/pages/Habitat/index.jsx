import{useLocation} from 'react-router-dom';
import './habitat.css';
import HabitatPres from '../../components/HabitatPres';
import Animaux from '../../components/Animaux';

const Habitat = () => {

  const location = useLocation();
const {habitat} = location.state;
 
    return (
      <div className="container-habitat">
      
          
      <HabitatPres habitat={habitat}/>  
      <Animaux habitat={habitat}/>
</div>
    )}
      export default Habitat