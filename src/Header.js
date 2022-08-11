import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className="header">
            <h1>This is the header.</h1>

            <div className="header-left">
                <img src="" alt="" />

                {/*Searc Icon */}
                <div className="header-search">

                </div>

            </div>

            <div className="header-right">

            </div>

        </div>
    )
}

export default Header