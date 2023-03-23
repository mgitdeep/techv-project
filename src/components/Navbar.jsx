import React from 'react'
import { Link } from 'react-router-dom'
// import '../styles/navbar.css'

const Navbar = () => {
  return (

    <nav className='onlynav'>
      <Link to='/'><h1>SellItNow</h1></Link>
      {/* <div className='city-select'>
            <button className='city-btn'>Select city</button>
            <div className="dropdown-city">
                <Link to='/jorhat'>Jorhat</Link>
                <Link to='/guwahati'>Guwahati</Link>
                <Link to='/Sivasagar'>Sivasagar</Link>
            </div>
      </div> */}
      <main>
        <Link to='/about' className='hv'><b>About</b></Link>
        <Link to='/contact' className='hv'><b>Contact</b></Link>
      </main>
      <Link to='/signup' className='signup hv'><div><b>Signup</b></div></Link>
      {/* <div>Signup</div> */}
    </nav>
  )
}

export default Navbar