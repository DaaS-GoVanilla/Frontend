import React from 'react'
import './deletepopup.css'

function DeletePopup() {
    return (
        <div className='pop-up'>
            <div className="main">
                <div className="wrapper">
                    <h1>Delete this Client?</h1>
                    <p><strong>Warning: </strong>This is a irreversible process ! Type down the following word to continue</p>

                    <input type="text" placeholder="Type delete" required />
                    <br />
                    <button className="btn">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeletePopup