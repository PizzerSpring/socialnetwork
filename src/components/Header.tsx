import React from 'react';
import classheader from "./Header.module.css";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className={classheader.header}>
            <div className={classheader.headerContainer}>
                <img className={classheader.logo}
                     src='https://img.icons8.com/ios-filled/344/nl-logo.png'/>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;