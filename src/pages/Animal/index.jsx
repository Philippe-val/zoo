import{useLocation} from 'react-router-dom';
import './animal.css';


const Animal = () => {

  const location = useLocation();
const {animal} = location.state;
 
    return (
      <div className="container-animal">
        <h1>{animal.title}</h1>
        <img src={animal.img} alt="" />
        <p>{animal.description}</p>
        <p>{animal.santé}</p>
        <p>{animal.alimentation}</p>
        <p>{animal.nouriture}</p>
        <p>{animal.soins}</p>

      
      
</div>
    )}
      export default Animal