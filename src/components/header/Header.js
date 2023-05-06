import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link className="nav-button" to="/" ><p>Главная</p></Link>
            <Link className="nav-button" to="/experience"><p>Опыт работы</p></Link>
            <Link className="nav-button" to="/about"><p>Обо мне</p></Link>
            <Link className="nav-button" to="/portfolio"><p>Портфолео</p></Link>
            <Link className="nav-button" to="/contact"><p>Контакты</p></Link>
        </div>
    );
};

export default Header;