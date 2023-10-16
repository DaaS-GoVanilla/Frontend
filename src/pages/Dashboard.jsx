import React from 'react'
import './dashboard.css'

function Dashboard() {
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
                <div className="second-main">
                    <p className="current-client">Client Company Name  | Timmy Ostrom_Fairway Independent Mortgage</p>
                    <div className="green"><img src="/src/assets/green.png" alt="" /></div>
                    <div className="dot"><i className='bx bx-dots-vertical-rounded'></i></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard