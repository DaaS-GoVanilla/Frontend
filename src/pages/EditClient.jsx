import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addclient.css';

function EditClient({ initialValues }) {
    const [formData, setFormData] = useState({
        companyName: '',
        locationId: '',
        apiKey: '',
        calendarLink: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        if (initialValues) {
            setFormData({
                companyName: initialValues.companyName || '',
                locationId: initialValues.locationId || '',
                apiKey: initialValues.apiKey || '',
                calendarLink: initialValues.calendarLink || ''
            });
        }
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/your-backend-endpoint', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                // Handle a successful response (e.g., show a success message)
            } else {
                // Handle an error response (e.g., show an error message)
            }
        } catch (error) {
            // Handle any network or other errors
        }
    };

    return (
        <div className='add-details'>
            <div className="top">
                <div className="main-text">
                    <h1>EDIT</h1>
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
                                name="companyName"
                                value={formData.companyName}
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
                                    name="locationId"
                                    value={formData.locationId}
                                    onChange={handleInputChange}
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className="API-key">
                                <p>API Key</p>
                                <input
                                    type="text"
                                    name="apiKey"
                                    value={formData.apiKey}
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
                                    name="calendarLink"
                                    value={formData.calendarLink}
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

export default EditClient;