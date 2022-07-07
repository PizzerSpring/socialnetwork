import React from 'react';
import { NavLink } from 'react-router-dom';
import classnavbar from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classnavbar.navigation}>
            <ul className={classnavbar.navlist}>
                <li><NavLink activeClassName={classnavbar.activeLink} className={classnavbar.item} to="/profile">Профиль</NavLink></li>
                <li><NavLink activeClassName={classnavbar.activeLink} className={classnavbar.item} to="/dialogs">Сообщения</NavLink></li>
                <li><NavLink activeClassName={classnavbar.activeLink} className={classnavbar.item} to="/news">Новости</NavLink></li>
                <li><NavLink activeClassName={classnavbar.activeLink} className={classnavbar.item} to="/music">Музыка</NavLink></li>
                <li><NavLink activeClassName={classnavbar.activeLink} className={classnavbar.item} to="/settings">Настройки</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;