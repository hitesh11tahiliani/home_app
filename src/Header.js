import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
// import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./images/L6.png";

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src={Logo}
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a seller</p>
                {/* <LanguageIcon /> */}
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header