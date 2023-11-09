import React, { useState } from 'react';
import axios from 'axios';
import './addclient.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddClient() {
    const [formData, setFormData] = useState({
        ClientCompanyName: '',
        LocationID: '',
        APIKey: '',
        CalendarLink: ''
    });

    const navigate = useNavigate();

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
            const response = await axios.post('https://us-central1-vanillasoft-to-ghl.cloudfunctions.net/function-1/middleware', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                navigate('/dashboard', { state: 'added' })
            } else {
                toast.error('Something went wrong', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <div className='add-details'>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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

export default AddClient;