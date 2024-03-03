import { useEffect, useState } from 'react';
import About from './About';
import AddBooks from './AddBooks';
import './App.css';
import './index.css'
import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import {Routes,Route, useNavigate} from 'react-router-dom'
import Signin from './Signin';
import Main from './Main';
import api from './api/data'

function App() {

  useEffect(()=>{
    const fetch=async()=>{
      try{
        const result=await api.get("/books")
        setBooks(result.data)
      }catch(err){
          console.log(err.message)
      }


    }
    fetch();
  },[])
  
  const [Books,setBooks]=useState([])
  const [searchbook,setsearchbooks]=useState('')
  const [returnbookName,setreturnbook]=useState('')
  const [returnbookdate,setbookdate]=useState('')
  const navigate=useNavigate('')
  const handelSubmit=async(e)=>{
    e.preventDefault()
    const id=Books.length ? Books[Books.length-1].id+1:1;
    const date=new Date().toLocaleString();
    const addBooks={id,title:returnbookName,date,returndate:returnbookdate}
    try{
      const respond=await api.post('/books',addBooks)
      const books=[...Books,respond.data]
      setBooks(books)
      setreturnbook('')
      setbookdate('')
      navigate('/home')
      localStorage.setItem("libraryapp",JSON.stringify(addBooks))

    }catch(err){
      console.log(err.message)
    }
    

  }
  const DeleteBook=async(id)=>{
    try{
      const listBooks=Books.filter((book)=> book.id!==id)
      await api.delete(`/books/${id}`,listBooks)   
      setBooks(listBooks)
      localStorage.setItem("libraryapp",JSON.stringify(listBooks))

    }catch(err){
      console.log(err.message)
    }

  }

  return (

    <div className="App">

      <Header title="Library ManagementApp" />
      <Nav searchbook={searchbook} setsearchbooks={setsearchbooks}/>
      <Routes>
      <Route path='/' element={<Main/>}></Route>
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
      </Routes>


    </div>
  );
}

export default App;
