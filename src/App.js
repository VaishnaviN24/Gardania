import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogues from "./pages/Catalogues";
import About from "./pages/About";
import React from "react";
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom";
import PlantDetail from "./components/PlantDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogues" element={<Catalogues />} />
          <Route path="/about"  element={<About />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
        </Routes>
         <Footer />
      </Router>
     </div>
   );
}
export default App;