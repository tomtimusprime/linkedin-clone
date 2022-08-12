import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { SupervisorAccount } from '@mui/icons-material'; 

const Header = () => {
    return (
        <div className="header">

            <div className="header-left">
                <img src={require('./linkedin.png')}title="linkedin icon" alt="" />

                {/*Searcj Icon */}
                <div className="header-search">
                    <SearchIcon />
                    <input type="text"></input>
                </div>

            </div>

            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccount}title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon}title="Jobs"/>
                <HeaderOption Icon={ChatIcon}title="Chat"/>
                <HeaderOption Icon={NotificationsIcon}title="Notifications"/>
            </div>

        </div>
    )
}

export default Header