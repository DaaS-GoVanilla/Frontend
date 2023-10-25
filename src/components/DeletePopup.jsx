import React from 'react'
import axios from 'axios';
import './deletepopup.css'
import { useState } from 'react';

function DeletePopup(props) {

    const [input, setInput] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input)
        try {
            const response = await axios.delete('http://localhost:8000/api/delete/' + props.data.id);

            if (response.status === 200) {
                console.log(response)
            } else {
                console.log(response)
            }
        } catch (error) {
            // Handle any network or other errors
            console.log(error)
        }
    };

    return (
        <div className='pop-up'>
            <div className="main">
                <div className="wrapper">
                    <h1>Delete this Client?</h1>
                    <i className='bx bx-x' onClick={() => { props.handler(false, null, null) }}></i>
                    <p><strong>Warning: </strong>This is a irreversible process ! Type down the following word to continue</p>

                    <input type="text" onChange={(e) => { setInput(e.target.value) }} placeholder="Type delete" required />
                    <br />
                    <button className="btn" onClick={submitHandler}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeletePopup