import React, { useState } from 'react';
import Cart from '../img/cart.png'
import Logo from '../img/logo.png'
import '../styles/Nav.css'



export default function Nav() {
    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="menu">
                    <a>Inicio</a>
                    <a>|</a>
                    <a>Productos</a>
                    <a>|</a>
                    <a>Sugerencias</a>
                </nav>
                <div className="cart">
                    <img src={Cart} alt="Carrito" /> (0)
                </div>
            </header>
        </>
    )
}