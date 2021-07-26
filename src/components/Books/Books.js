// imports
import React from 'react'
import Book from '../Book/Book'
import './Books.css'
//creating the books component for containing all the books
const Books=(props)=>{
    //checking which books to show
    let books= props.view!='all'?props.books.filter(book=>book.status===props.view):props.books
    return(
        //applying map function to render all the books
        <div className='booklist'>
        {books.map(book=><Book clasName='book' id={book.id} key={book.id} value={book.status} onChange={props.onChange} title={book.title} author={book.author} img={book.img}/>)}
    </div>
    )
}
//providing default export
export default Books