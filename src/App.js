import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Prestation from "./pages/Prestation";
import Avis from "./pages/Avis";
import Contact from "./pages/Contact";
import Habitats from "./pages/Habitats";
import Histoire from "./pages/Histoire";
import Habitat from "./pages/Habitat";
import Soigneur from "./pages/Soigneur";
import Actualite from "./pages/Actualite";
import Mission from "./pages/Mission";
import Animal from "./pages/Animal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestation" element={<Prestation />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/habitats" element={<Habitats />} />
          <Route path="/habitat/:id_habitat" element={<Habitat />} />   
          <Route path="/soigneur" element={<Soigneur />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="*" element={<p>Error 404</p>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
