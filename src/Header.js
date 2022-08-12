import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

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

            </div>

        </div>
    )
}

export default Header