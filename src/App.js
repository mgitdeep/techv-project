import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/forms/Signup";
import UserDashboard from "./components/UserDashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import './styles/App.css'
import './styles/navbar.css'
import './styles/signup.css'
import './styles/home.css'


function App() {

  return (
    <BrowserRouter>
    {/* <Navbar about="About" contact="Contact" signup="Signup"/> */}
      <Routes>
        <Route path="/" element={<><Navbar about="About" contact="Contact" signup="Signup"/> <Home /></>}/>
        <Route path="/about" element={<><Navbar about="About" contact="Contact" signup="Signup"/> <About /></>}/>
        <Route path="/contact" element={<><Navbar about="About" contact="Contact" signup="Signup"/> <Contact /></>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/userdashboard" element={<UserDashboard about="About" contact="Contact" signout="Signout"/>}/>
        
        {/* <MultipleInputs /> */}
      </Routes>
    {/* <UserDashboard /> */}
    </BrowserRouter>
  );
}

export default App