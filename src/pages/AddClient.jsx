import React from 'react'
import './addclient.css'

function AddClient() {
    return (
        <div className='add-details'>
            <div className="top">
                <div className="main-text">
                    <h1>Add</h1>
                </div>
                <div className="user-image">
                    <img src="/src/assets/userimage.png" alt="" />
                </div>
            </div>
            <div className="wrapper">
                <div className="main">
                    <div className="input-box-first">
                        <p>Client Company Name</p>
                        <input type="text" placeholder="" required />
                    </div>
                    <div className="input-box-second">
                        <div className="location-id">
                            <p>Location ID</p>
                            <input type="text" placeholder="" required />
                        </div>
                        <div className="API-key">
                            <p>API Key</p>
                            <input type="text" placeholder="" required />
                        </div>
                    </div>

                    <div className="input-box-third">
                        <div className="calendar">
                            <p>Calendar Link</p>
                            <input type="text" placeholder="" required />
                        </div>
                    </div>
                    <button type="submit" className="btn">Cancel</button>
                    <button type="submit" className="black-btn">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddClient