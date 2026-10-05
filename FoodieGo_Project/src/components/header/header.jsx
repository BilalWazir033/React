import React from 'react';
import Logo from '../title/Logo';

const Header = () => {
    return (
        <header className="header">


            <Logo />

            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">LogIn</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;



