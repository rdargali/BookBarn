import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function DisplayBooks() {

const [books, setBooks] = useState([])

useEffect(() => {

    fetch("http://localhost:8080/viewallbooks")
    .then(response => response.json())
    .then(json => setBooks(json))
    
    
},[])


const buildUpdateURL = (bookId) => {
  
    return "/update/" + bookId
}

return (
    <div>
        {books.map(book => {
            
            
            return  (
            <ul key={book.id}>
                        <li>{book.title}</li>
                        <li>{book.genre}</li>
                        <li>{book.publisher}</li>
                        <li>{book.year}</li>
                        <li><img style={{width: "200px"}} alt="book" src={book.imgURL}></img></li>
                        <Link to ={buildUpdateURL(book.id)} >Update</Link>
                        
                       
           
    
            </ul>
            )})}
    </div>


)
    }