import React from 'react'
import { Link } from 'react-router-dom'
const Nav = ({searchbook,setsearchbooks}) => {
  
  return (
    <main className='Nav'>
        <nav>
          <form onSubmit={(e)=> e.preventDefault()} className='NavForm'>
            <input 
            id='search'
            type="text"
            placeholder='search Books'
            value={searchbook}
            onChange={(e)=>setsearchbooks(e.target.value)}
             />

          

            <ul >
              <li><Link to='/main' style={{color:'white', textDecoration:'none'}}>Home</Link></li>
                <li><Link to='/home' style={{color:'white', textDecoration:'none'}}>Books Section</Link></li>
                <li><Link to='/addbooks' style={{color:'white',textDecoration:'none'}}>Add Books</Link></li>
                <li><Link to='/about' style={{color:'white',textDecoration:'none'}}>About</Link></li>
                <li><Link style={{color:'white',textDecoration:'none'}} to='/signin'>SignIn</Link></li>
                
            </ul>
            </form>
            
        </nav>
    </main>
  )
}

export default Nav