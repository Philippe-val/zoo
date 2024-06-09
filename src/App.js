import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Prestation from "./pages/Prestation";
import Avis from "./pages/Avis";
import Contact from "./pages/Contact";
import Habitats from "./pages/Habitats";
import Histoire from "./pages/Histoire";
import Savane from "./pages/Savane";
import Desert from "./pages/Desert";
import Foret from "./pages/Foret";
import Polaire from "./pages/Polaire";
import Ocean from "./pages/Ocean";
import Montagne from "./pages/Montagne";
import Soigneur from "./pages/Soigneur";
import Actualite from "./pages/Actualite";

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
          <Route path="/savane" element={<Savane />} />
          <Route path="/desert" element={<Desert />} />
          <Route path="/foret" element={<Foret />} />
          <Route path="/montagne" element={<Montagne />} />
          <Route path="/ocean" element={<Ocean />} />
          <Route path="/polaire" element={<Polaire />} />
          <Route path="/soigneur" element={<Soigneur />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="actualite" element={<Actualite />} />
          <Route path="*" element={<p>Error 404</p>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
