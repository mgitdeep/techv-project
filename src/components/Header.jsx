import React from 'react'
import { Link } from 'react-router-dom'
// import '../styles/Header.css'

const Header = () => {
  return (

    <nav>
      <Link to='/'><h1>SellItNow</h1></Link>
      <main>
        <Link to='/about' className='hv'><b>About</b></Link>
        <Link to='/contact' className='hv'><b>Contact</b></Link>
      </main>
      <Link to='/signup' className='signup hv'><div><b>Signup</b></div></Link>
      {/* <div>Signup</div> */}
    </nav>
  )
}

export default Header