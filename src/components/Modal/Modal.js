// imports
import React from 'react';
import './Modal.css'
// creating a functional component for modal with prop
const Modal = (props) => {
    return (
        // main div for modal overaly
        <div className='modal' name='overlay' onClick={props.onClick}>
            {/* div for containing all the components of modal */}
            <div className='modal-container' >
            {/* button to close modal */}
            <div className="close"><span name='close' onClick={props.onClick}>X</span></div>
            <h1>Input Books Infomation</h1>
            {/* inpust and labels for modal */}
                <label htmlFor="">Book Name</label>
                <input type="text" name="title" id="title" onChange={props.onChange} />
                <label htmlFor="">Author Name</label>
                <input type="text" name="author" id="author" onChange={props.onChange}/>
                <label htmlFor="">Image Link</label>
                <input type="text" name="link" id="link" onChange={props.onChange}/>
                <label htmlFor="">Choose Status</label>
                <select className='addto' name="addto" onChange={props.onChange}>
                    <option value="already">Already Read</option>
                    <option value="toread">To be Read</option>
                    <option value="reading">Reading</option>
                </select>
                {/* button to add book from data entered in modal */}
                <button className='modal-add-button' name='addnewbook' onClick={props.onClick}>Add Book</button>
            </div>
        </div>
    );
}
export default Modal;
