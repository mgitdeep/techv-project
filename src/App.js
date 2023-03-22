import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/forms/Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import './styles/App.css'
import './styles/header.css'
import './styles/Signup.css'


function App() {

  return (
    <BrowserRouter>
    <Header />
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