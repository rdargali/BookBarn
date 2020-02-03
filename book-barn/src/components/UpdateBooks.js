import React from "react"
import { useState, useEffect } from 'react'

const gohome = "http://localhost:3000/"

export default function UpdateBooks(props) {

const [book, setBook] = useState([])



useEffect(() => {
        
    let { bookid } = props.match.params

            fetch("http://localhost:8080/viewbook/" + bookid)
            .then(response => response.json())
            .then(book => {
                
                setBook(book)
            })            

            
}, [] )

        
const handleDelete = () => {

    let bookid = book.id
   

    fetch(("http://localhost:8080/delete/" + bookid), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({bookid: bookid})
    })
    
    .then(results => console.log(results))
    

}    
        
    
 
   

    
 return (

        <div>

            

                    
                        <ul key={book.id}>
                            <li>{book.title}</li>
                            <li>{book.genre}</li>
                            <li>{book.publisher}</li>
                            <li>{book.year}</li>
                            <li><img style={{ width: "200px" }} alt="book" src={book.imgURL}></img></li>
                            <a href={gohome}> <button onClick={handleDelete}>Delete</button>  </a> 


                        </ul>

                    
            
            
          
        </div>
    )


    }
