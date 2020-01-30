import React from 'react'
import { useState, useEffect } from 'react'

export default function DisplayBooks() {

const [books, setBooks] = useState([])

useEffect(() => {

    fetch("http://localhost:8080/viewallbooks")
    .then(response => response.json())
    .then(json => setBooks(json))
    
    
},[])

   


return (
    <div>
        {books.map(book => {
            
            
            return  (
            <ul key={book.id}>
                        <li>{book.title}</li>
                        <li>{book.genre}</li>
                        <li>{book.publisher}</li>
                        <li>{book.year}</li>
                        <li><img alt="book" src={book.imgURL}></img></li>
    
            </ul>
            )})}
    </div>


)
    }