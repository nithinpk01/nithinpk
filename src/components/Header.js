import React from "react";
import './Header.css'

function Header() {
    return (
        <header>
            <div className="container">
                Nithin PK
                <nav>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#">Services</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;