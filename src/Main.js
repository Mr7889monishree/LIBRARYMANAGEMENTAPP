import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <main className='image'>
        <div className="overlay">
        <h1>Welcome To Library Plus
        </h1>
        <h3>        "Every Day is a fresh Start......"
</h3>
        
          <br />
        <Link to='/home' ><button>Next </button></Link>      
        </div>

    </main>
 
  )
}

export default Main