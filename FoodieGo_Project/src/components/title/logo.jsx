import React from 'react';
import logoImage from '../images/logo.png';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logoImage} alt="FoodieGo Logo" />
            <h1>
                Foodie<span>Go</span>
            </h1>
        </div>
    );
};

export default Logo;