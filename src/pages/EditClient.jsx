import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addclient.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function EditClient({ }) {
    const [formData, setFormData] = useState({
        ClientCompanyName: '',
        LocationID: '',
        APIKey: '',
        CalendarLink: ''
    });

    const { state } = useLocation()

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        if (state) {
            setFormData({
                ClientCompanyName: state['Client Company Name'],
                LocationID: state['Location ID'],
                APIKey: state['API key'],
                CalendarLink: state['Calendar Link']
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
                        <button onClick={() => { navigate('/dashboard') }} className="btn">Cancel</button>
                        <button type="submit" className="black-btn">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditClient;