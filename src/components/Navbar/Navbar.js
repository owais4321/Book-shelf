//imports
import React from 'react'
import './Navbar.css'
//creating a functional component for navbar with props 
const Navbar=(props)=>{
    return(
        // main div for navbar
        <div className='navbar'>
        {/* each nav bar item with onClick prop to apply click functionality */}
            <div className='navitem' name='all' onClick={props.onClick}>All Books</div>
            <div className='navitem' name='already' onClick={props.onClick}>Aleady Read</div>
            <div className='navitem' name='toread' onClick={props.onClick}>To be Read</div>
            <div className='navitem' name='reading' onClick={props.onClick}>Reading</div>
        </div>
    )
}
//proving default export
export default Navbar;