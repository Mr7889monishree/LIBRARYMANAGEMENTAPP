import React from 'react'
import Display from './Display'

const Home = ({Books,DeleteBook}) => {
  return (
    <main className='Home'>
        <div className="overlay">
        {(Books.length) ? (
            <>
                <ul>
                    {Books.map((book)=>(
                        <Display key={book.id} book={book} DeleteBook={DeleteBook} />
                    ))}
                </ul>
            </>
            
        ):(
            <p>No Books To Display</p>
        )}
        </div>
        
        
    </main>
  )
}

export default Home