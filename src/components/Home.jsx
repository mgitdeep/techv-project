import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='dropdown'>
            <button className='dropBtn'><b>Category List</b></button>
            <div className="dropdown-menu">
                <Link to='/cars'>Cars</Link>
                <Link to='/motorcycles'>Motorcycles</Link>
                <Link to='/mobiles'>Mobiles</Link>
                <Link to='/apartments'>Apartments</Link>
            </div>
        </div>
        
        <div className="horizontalCategories">
                <Link to='/cars'>Cars</Link>
                <Link to='/motorcycles'>Motorcycles</Link>
                <Link to='/mobiles'>Mobiles</Link>
                <Link to='/apartments'>Apartments</Link>
        </div>
        
        
    </div>
  )
}

export default Home