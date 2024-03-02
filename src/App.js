import { useState } from 'react';
import About from './About';
import AddBooks from './AddBooks';
import './App.css';
import './index.css'
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import {Routes,Route, useNavigate} from 'react-router-dom'
import Signin from './Signin';
import Main from './Main';

function App() {
  const [Books,setBooks]=useState([{
    id:1,
    title:'Signals and System',
    date:new Date(),
    returndate:'12:02:24'

  },
  {
    id:2,
    title:'Signals and System',
    date:new Date(),
    returndate:'12:02:24'

  }])
  const [searchbook,setsearchbooks]=useState('')
  const [returnbookName,setreturnbook]=useState('')
  const [returnbookdate,setbookdate]=useState('')
  const navigate=useNavigate('')
  const handelSubmit=(e)=>{
    e.preventDefault()
    const id=Books.length ? Books[Books.length-1].id+1:1;
    const date=new Date()
    const addBooks={id,title:returnbookName,date,returndate:returnbookdate}
    const books=[...Books,addBooks]
    setBooks(books)
    setreturnbook('')
    setbookdate('')
    navigate('/home')
    localStorage.setItem("libraryApp",JSON.stringify(books))


  }
  const DeleteBook=(id)=>{
    const listBooks=Books.filter((book)=> book.id!==id)
    setBooks(listBooks)
    localStorage.setItem("libraryApp",JSON.stringify(listBooks))

  }

  return (

    <div className="App">
      <Header title="Library ManagementApp" />
      <Nav searchbook={searchbook} setsearchbooks={setsearchbooks}/>
      <Routes>
      <Route path='/main' element={<Main/>}></Route>
      <Route path='/home' element={
      <Home Books={Books.filter((Books)=>(Books.title) && ((Books.title).toLowerCase()).includes(searchbook.toLowerCase()))}
      DeleteBook={DeleteBook}/>}/>
      <Route path='/addbooks' element={<AddBooks returnbookName={returnbookName}
      setreturnbook={setreturnbook}
      returnbookdate={returnbookdate}
      setbookdate={setbookdate}
      handelSubmit={handelSubmit}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='*' element={<Missing/>}/>
      </Routes>


    </div>
  );
}

export default App;
