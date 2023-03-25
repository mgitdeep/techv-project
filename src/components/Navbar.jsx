import React from 'react'
import { Link } from 'react-router-dom'
// import '../styles/navbar.css'

const Navbar = (props) => {
  return (

    <div className='onlynav'>
      <Link to='/'><h1 className='navh1'>SellItNow</h1></Link>
      {/* <div className='city-select'>
            <button className='city-btn'>Select city</button>
            <div className="dropdown-city">
                <Link to='/jorhat'>Jorhat</Link>
                <Link to='/guwahati'>Guwahati</Link>
                <Link to='/Sivasagar'>Sivasagar</Link>
            </div>
      </div> */}
      <main className='navMain'>
        <Link to='/about' className='hv'><b>{props.about}</b></Link>
        <Link to='/contact' className='hv'><b>{props.contact}</b></Link>
      </main>
      <Link to='/signup' className='signup hv'><div><b>{props.signup}</b></div></Link>
      {/* <div>Signup</div> */}
    </div>
  )
}

export default Navbar