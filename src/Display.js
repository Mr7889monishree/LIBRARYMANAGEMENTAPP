import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaTrashAlt } from 'react-icons/fa';

const Display = ({ book, DeleteBook }) => {
  return (
    <div className="key-container">
     <Card className="d-inline-block mx-3" style={{ width: '18rem' }} key={book.id}>
            <Card.Body className='key'>
                <Card.Title> ID  : {book.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">BOOK NAME : {book.title}</Card.Subtitle>
                <Card.Text>
                    DATE :  {book.date.toLocaleString()}
                </Card.Text>
                <Card.Text> RETURN DATE :  {book.returndate}</Card.Text>
                <FaTrashAlt onClick={()=> DeleteBook(book.id)}/>
            </Card.Body>
            <br />
        </Card>
    </div>
  )
}

export default Display;
