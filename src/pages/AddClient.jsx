import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './addclient.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import user from '../assets/userimage.png'
import Loader from '../components/Loader';


function AddClient() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        ClientCompanyName: '',
        LocationID: '',
        APIKey: '',
        CalendarLink: '',
        SpecialNotes: '',
        Active: 'True'
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/')
        }
    }, [])


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
        setLoading(true)
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

        setLoading(false)
    };

    return (
        <>
            {loading ? <Loader /> : <></>}
            <div className={'add-details' + (loading ? " enable" : "")}>
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
                        <img src={user} alt="" />
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
                                <div className="special-notes">
                                    <p>Special Notes</p>
                                    <input
                                        type="text"
                                        name="SpecialNotes"
                                        value={formData.SpecialNotes}
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
        </>
    );
}

export default AddClient;