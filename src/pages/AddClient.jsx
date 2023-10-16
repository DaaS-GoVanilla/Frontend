import React from 'react'
import './addclient.css'

function AddClient() {
    return (
        <div class='add-details'>
            <div class="top">
                <div class="main-text">
                    <h1>Add</h1>
                </div>
                <div class="user-image">
                    <img src="/src/assets/userimage.png" alt="" />
                </div>
            </div>
            <div class="wrapper">
                <div class="main">
                    <div class="input-box-first">
                        <p>Client Company Name</p>
                        <input type="text" placeholder="" required />
                    </div>
                    <div class="input-box-second">
                        <div class="location-id">
                            <p>Location ID</p>
                            <input type="text" placeholder="" required />
                        </div>
                        <div class="API-key">
                            <p>API Key</p>
                            <input type="text" placeholder="" required />
                        </div>
                    </div>

                    <div class="input-box-third">
                        <div class="calendar">
                            <p>Calendar Link</p>
                            <input type="text" placeholder="" required />
                        </div>
                    </div>
                    <button type="submit" class="btn">Cancel</button>
                    <button type="submit" class="black-btn">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddClient