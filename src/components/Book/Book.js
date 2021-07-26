// imports
import React from 'react'
import './Book.css'
//creating a functional component for Book with props
const Book=(props)=>{
return (
// container div for book component
<div className='container'>
{/* cover image for the book */}
    <img className='cover' src={props.img} alt="" />
{/* title for the book */}
    <div className='title'>
        <span>Title: </span>{props.title}
    </div>
{/* author of the book */}
    <div className='author'> 
        <span>Author: </span>{props.author}
    </div>
{/* choosing book status using select component */}
    <div className='select'>
    <label htmlFor="">Add to</label>
    <select className='addto' name="statuschange" onChange={props.onChange} value={props.value} id={props.id}>
    <option  value="already">Already Read</option>
    <option  value="toread">To be Read</option>
    <option value="reading">Reading</option>
    </select>
    </div>
</div> 
)
}
// providing default export
export default Book;