import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/forms/Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import './styles/App.css'
import './styles/navbar.css'
import './styles/signup.css'
import './styles/home.css'


function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/signup" element={<Signup />}/>
        
        {/* <MultipleInputs /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App