import React, {useState} from 'react';

import './header.css'
import logo from '../img/logo.png'
import rus from '../img/rus.png'
import note from '../img/note.png'

const Header = () => {
    return (
    <div class="header">
        <div class="logo">
            <a href="index.html">
                <img src= {logo} alt="Логотип кафедры"/>
            </a>
        </div>
        <div class="header__name">УГНТУ <br/> ЦТиМ</div>
        <nav>
        <div class="header__language">
                <img src={rus}/>
            </div>
            <ul>
                <li class="nav-item"><a href="#">Новости</a></li>
                <li class="nav-item"><a href="#">Студенту</a></li>
                <li class="nav-item"><a href="#">Абитуриенту</a></li>
                <li class="nav-item"><a href="#">Образование</a></li>
                <li class="nav-item"><a href="#">История</a></li>
                <li class="nav-item"><a href="#">О кафедре <img src={note}/></a></li>
            </ul>
        </nav>
        <div class="language"></div>
    </div>   
    )
};

export default Header;