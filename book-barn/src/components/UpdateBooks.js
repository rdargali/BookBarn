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

const handleChange = (e) => {

    setBook ({
        ...book,
        [e.target.name]: e.target.value
        
    })
}

const handleUpdate = (e) => {




    let bookid = book.id
   

    fetch(("http://localhost:8080/update/" + bookid), {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: bookid,
            title: book.title,
            genre: book.genre,
            publisher: book.publisher,
            year: book.year,
            imgURL: book.imgURL
        })
    })
    
    .then(results => console.log(results))

}
        
    
 
   

    
 return (

        <div>

            

                    
                        <ul key={book.id}>
                            <li>New Title: <input  onChange ={handleChange} type="text" value={book.title} name="title" /></li>
                            <li>New Genre: <input onChange ={handleChange} type="text" value={book.genre} name="genre" placeholder="new genre"/></li>
                            <li>New Publisher: <input onChange ={handleChange} type="text" value={book.publisher} name="publisher" placeholder="new publisher"/></li>
                            <li>New Year: <input onChange ={handleChange} type="text" value={book.year} name="year" placeholder="new year"/></li>
                            <li>New Image Url: <input onChange ={handleChange} type="text" value={book.imgURL} name="imgURL" placeholder="new image url"/><br /><img style={{ width: "200px" }} alt="book" src={book.imgURL}></img><br />
                            </li> <br />
                            <a href={gohome}> <button onClick={handleUpdate}>Update With New Info</button>  </a> 
                            <a href={gohome}> <button onClick={handleDelete}>Delete Book Permanently</button>  </a> 

                        </ul>

                    
            
            
          
        </div>
    )


    }
