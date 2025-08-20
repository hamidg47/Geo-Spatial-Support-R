import Home from './pages/Home';
import Project from './pages/Project';
import UAE from './pages/UAE_Climate_Report_2024';
import Remote from './pages/Remote_Sensing_Project';
import Machine from './pages/Machine_Learning_in_GIS';
import Land from './pages/Land_Deformation_Detection';
import Disaster from './pages/Disaster_Detection';
import About from './pages/About_Me';
import Contact from './pages/Contact';
import AddReview from './pages/Review';

import Header from './components/Header';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/UAE" element={<UAE />} />
          <Route path="/Remote" element={<Remote />} />
          <Route path="/Machine" element={<Machine />} />
          <Route path="/Land" element={<Land />} />
          <Route path="/Disaster" element={<Disaster />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Review" element={<AddReview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
