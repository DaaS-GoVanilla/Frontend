import React, { useState, useEffect } from 'react';
import './dashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DeletePopup from '../components/DeletePopup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import green from '../assets/green.png'
import red from '../assets/red.png'
import user from '../assets/userimage.png'
import Loader from '../components/Loader';

function Dashboard() {
    const [loading, setLoading] = useState(true)
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [popup, setPopup] = useState({ enable: false, type: null, id: null })
    const navigate = useNavigate()
    const { state } = useLocation()

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/')
            return
        }
        axios.get('https://us-central1-vanillasoft-to-ghl.cloudfunctions.net/function-1/middleware')
            .then(response => {
                console.log(response.data)
                setClients(response.data);
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching client data:', error);
            });
        if (state) {
            if (state === 'added') {
                toast.success('Client added successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else if (state === 'updated') {
                toast.success('Client updated successfully!', {
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
        }

    }, []);

    function handlePopup(enable, type, id) {
        if (!enable && (type === 'Pause' || type === 'Unpause' || type === 'Delete')) {
            var f;
            var found = clients.some(function (record, index) { f = index; return record['APIKey'] === id; });
            if (found && type === 'Delete') {
                console.log(enable)
                clients.splice(f, 1);
                setClients(clients)
                setPopup({
                    enable: false,
                    type: null,
                    id: null
                })
            } else if (found && (type === 'Pause' || type === 'Unpause')) {
                console.log(enable)
                clients[f]['Active'] = clients[f]['Active'] === 'True' ? 'False' : 'True'
                setClients(clients)
                setPopup({
                    enable: false,
                    type: null,
                    id: null
                })
            }
        }
        else {
            setPopup({
                enable: enable,
                type: type,
                id: id
            })
        }
    }

    const filteredClients = clients.filter(client =>
        client['ClientCompanyName'].toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [selectedClient, setSelectedClient] = useState(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleDotClick = (clientId) => {
        console.log(clientId)
        setSelectedClient(clientId);
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <>
            {popup.enable ? <DeletePopup handler={handlePopup} data={popup} /> : <></>}
            <div className={"dashboard" + (popup.enable ? " enable" : "")}>
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
                        <h1>Dashboard</h1>
                    </div>
                    <div className="user-image">
                        <img src={user} alt="" />
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
                        <button className="btn" onClick={() => { navigate('/addclient') }}><i className='bx bx-plus'></i>Add</button>
                    </div>
                    {loading ? <Loader /> : <>                    {filteredClients.map(client => (
                        <div key={client['APIKey']} className="second-main">
                            <p className="current-client">Client Company Name | {client['ClientCompanyName']}</p>
                            <div className="dot" onClick={() => handleDotClick(client['APIKey'])}><i className='bx bx-dots-vertical-rounded'></i></div>
                            <div className="green"><img src={client['Active'] === 'False' ? red : green} alt='' /></div>
                            {isDropdownVisible && selectedClient === client['APIKey'] && (
                                <div className="dropdown-menu">
                                    <button onClick={() => navigate('/editclient', { state: client })}>Edit</button>
                                    <button className='pause' onClick={() => handlePopup(true, client['Active'] === 'False' ? 'Unpause' : 'Pause', client['APIKey'])}>{client['Active'] === 'False' ? <>Unpause</> : <>Pause</>}</button>
                                    <button className='delete' onClick={() => handlePopup(true, 'Delete', client['APIKey'])}>Delete</button>
                                </div>
                            )}
                        </div>
                    ))}
                    </>
                    }
                </div>
            </div>
        </>
    );
}

export default Dashboard;
