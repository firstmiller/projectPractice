import React, {useState} from 'react';

import './header.css'
import logo from '../img/logo.png'
import rus from '../img/rus.png'
import note from '../img/note.png'

const Header = () => {
    return (
        <div>
    <div>
    <div className="header">
        <div className="logo">
            <a href="/">
                <img src= {logo} alt="Логотип кафедры"/>
            </a>
        </div>
        <div className="header__name">УГНТУ <br/> ЦТиМ</div>
        <nav>
        <div className="header__language">
                <img src={rus}/>
            </div>
            <ul>
                <li className="nav-item"><a href="#">Новости</a></li>
                <li className="nav-item"><a href="#">Студенту</a></li>
                <li className="nav-item"><a href="#">Абитуриенту</a></li>
                <li className="nav-item"><a href="#">Образование</a></li>
                <li className="nav-item"><a href="#">История</a></li>
                <li className="nav-item"><a href="#">О кафедре <img src={note}/></a></li>
            </ul>
        </nav>
    </div>
    </div>   
    </div>
    )
};

export default Header;