import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx';
import Proj from './components/Proj.jsx';
import Skill_sets from './components/Skill_sets.jsx';
import Footer from './components/Footer.jsx';
import Contact from "./components/Contact.jsx"
import { Link } from 'react-scroll';
import { Toaster } from 'react-hot-toast';
function App() {
  
  return (
    <>
     <div >
     <Navbar/>
      <Home/>
      <Proj/>
     <Skill_sets/>
     <Footer/>
     <Contact/>
     </div>
     <Toaster/>
    </>
  );
}

export default App;
