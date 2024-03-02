import React from 'react'


const AddBooks = ({returnbookName,setreturnbook,returnbookdate,setbookdate,handelSubmit}) => {
  return (
    <main>
        <form onSubmit={handelSubmit} className='AddForm'>
            <p>
                <label htmlFor="booksadd" >Book Name</label>
                <br />
                <input 
                autoComplete='focus'
                type="text"
                placeholder='Enter the Book Name' 
                value={returnbookName}
                onChange={(e)=> setreturnbook(e.target.value)}
                required/>
            </p>
            <p>
                <label htmlFor="booksadd" >Book Return Date</label>
                <br />
                <input 
                autoComplete='focus'
                type="text"
                placeholder='Enter the Book Return Date'
                value={returnbookdate}
                onChange={(e)=> setbookdate(e.target.value)} 
                />
            </p>
             
            <button className='button'>
                Submit
            </button>
        </form>
    </main>
  )
}

export default AddBooks