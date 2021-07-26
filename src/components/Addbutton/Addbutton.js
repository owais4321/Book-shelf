// imports 
import React from 'react'
import './Addbutton.css'
//creating add book button component with props
const Addbutton =(props)=>{
    return (
        // button container
        <div className='buttoncontainer'>
            {/* button with onClick prop */}
            <button className='addbutton' name='addbutton' onClick={props.onClick}>+</button>
         
        </div>
    )
}
// providing default export
export default Addbutton;