import { Avatar } from '@mui/material';
import React from 'react'
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="" alt="" />
                <Avatar className="sidebar-avatar"/>
                <h2>Tom Black</h2>
                <h2>tom.black06007@gmail.com</h2>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who's viewed you?</p>
                    <p className='sidebar-statNumber'>2,543</p>
                </div>
                <div className="sidebar-stat">
                <p>Views on post</p>
                <p className="sidebar-statnumber">2,448</p>
                </div>
            </div>

            <div className="sidebar-bottom">
                <p>Recent</p>
            
            </div>
        </div>
    )
}

export default Sidebar