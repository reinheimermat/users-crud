import React from "react";
import logo from '../../assets/imgs/logo.png'
import './Logo.css';

export default function Logo() {
    return (
        <aside className="logo">
            <a href="/" className='logo'>
                <img src={logo} alt="logo" />
            </a>
        </aside>
    )
}