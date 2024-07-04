import{useParams} from 'react-router-dom';
import './habitat.css';
import HabitatPres from '../../components/HabitatPres';
import Animaux from '../../components/Animaux';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Habitat = () => {

  const {id_habitat} = useParams();

  const [habitat, setHabitat] = useState()

useEffect(() => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/habitat/"+id_habitat,
    headers: {
        "Content-Type": "application/json",
    }
    
};
axios
            .request(config)
            .then((response) => {
              console.log(response)
                setHabitat(response.data.habitat);
            })
            .catch((error) => {
                console.log(error);
            });  
}, [])
    return (
      <div className="container-habitat">
      
          
       {habitat && <HabitatPres habitat={habitat}/>  }
     
</div>
    )}
      export default Habitat