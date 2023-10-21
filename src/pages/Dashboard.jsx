import React, { useState, useEffect } from 'react';
import './dashboard.css';
import axios from 'axios';

function Dashboard() {
    // const [clients, setClients] = useState([]);

    const clients = [
        {
            companyName: "Timmy Ostrom_Fairway Independent Mortgage",
            locationID: "mqafKFlMAGC75HeD7aDm",
            api: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
            calendarLink: "https://api.leadconnectorhq.com/widget/bookings/loan-consultation-30-minute-call-timmy-ostrom",
            specialNotes: "Assign Lead to Timmy",
            liveTransferForm: "https://api.leadconnectorhq.com/widget/form/m1pEBt6J1FlM4I0JfeQ1",
            apptBookedForm: "https://api.leadconnectorhq.com/widget/form/a78x0hbEPoRGVyEUOdfV"
        },
        {
            companyName: "Joel Martin_Integrity Home Funding",
            locationID: "TH6woF4OR5VBIn8agpXL",
            api: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ0",
            calendarLink: "https://api.leadconnectorhq.com/widget/bookings/loan-consultation-30-minute-call-joel-martin",
            specialNotes: "Assign Lead to Joel",
            liveTransferForm: "https://api.leadconnectorhq.com/widget/form/tXm92UTicQv2yA0piOnv",
            apptBookedForm: "https://api.leadconnectorhq.com/widget/form/oMX8hGpMqrdtnn2VWY0M"
        },
    ]

    // useEffect(() => {
    //     axios.get('/api/clients') 
    //         .then(response => {
    //             setClients(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching client data:', error);
    //         });
    // }, []); 

    return (
        <div className="dashboard">
            <div className="top">
                <div className="main-text">
                    <h1>Dashboard</h1>
                </div>
                <div className="user-image">
                    <img src="/src/assets/userimage.png" alt="" />
                </div>
            </div>
            <div className="wrapper">
                <div className="main">
                    <div className="input-box">
                        <input type="text" placeholder="Search" required />
                        <i className='bx bx-search'></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="All" required />
                        <i className='bx bx-chevron-down'></i>
                    </div>
                    <button type="submit" className="btn"><i className='bx bx-plus'></i>Add</button>
                </div>
                {clients.map(client => (
                    <div key={client.api} className="second-main">
                        <p className="current-client">Client Company Name | {client.companyName}</p>
                        <div className="green"><img src='/src/assets/green.png' alt='' /></div>
                        <div className="dot"><i className='bx bx-dots-vertical-rounded'></i></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
