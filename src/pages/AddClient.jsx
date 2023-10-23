import React, { useState } from 'react';
import axios from 'axios';
import './addclient.css';

function AddClient() {
    const [formData, setFormData] = useState({
        ClientCompanyName: '',
        LocationID: '',
        APIKey: '',
        CalendarLink: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await axios.post('http://localhost:8000/api/create', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                console.log(response)
            } else {
                console.log(response)
            }
        } catch (error) {
            // Handle any network or other errors
        }
    };

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
                    <form onSubmit={submitHandler}>
                        <div className="input-box-first">
                            <p>Client Company Name</p>
                            <input
                                type="text"
                                name="ClientCompanyName"
                                value={formData.ClientCompanyName}
                                onChange={handleInputChange}
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="input-box-second">
                            <div className="location-id">
                                <p>Location ID</p>
                                <input
                                    type="text"
                                    name="LocationID"
                                    value={formData.LocationID}
                                    onChange={handleInputChange}
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className="API-key">
                                <p>API Key</p>
                                <input
                                    type="text"
                                    name="APIKey"
                                    value={formData.APIKey}
                                    onChange={handleInputChange}
                                    placeholder=""
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-box-third">
                            <div className="calendar">
                                <p>Calendar Link</p>
                                <input
                                    type="text"
                                    name="CalendarLink"
                                    value={formData.CalendarLink}
                                    onChange={handleInputChange}
                                    placeholder=""
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn">Cancel</button>
                        <button type="submit" className="black-btn">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddClient;