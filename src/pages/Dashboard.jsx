import React, { useState, useEffect } from 'react';
import './dashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/getallclient')
            .then(response => {
                console.log(response.data)
                setClients(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching client data:', error);
            });
    }, []);

    function handleAdd(e) {
        e.preventDefault();
        navigate('/addclient')
    }

    const filteredClients = clients.filter(client =>
        client['Client Company Name'].toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        <input type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <i className='bx bx-search'></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="All" readOnly />
                        <i className='bx bx-chevron-down'></i>
                    </div>
                    <button className="btn" onClick={handleAdd}><i className='bx bx-plus'></i>Add</button>
                </div>
                {filteredClients.map(client => (
                    <div key={client['API key']} className="second-main">
                        <p className="current-client">Client Company Name | {client['Client Company Name']}</p>
                        <div className="dot"><i className='bx bx-dots-vertical-rounded'></i></div>
                        <div className="green"><img src='/src/assets/green.png' alt='' /></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
