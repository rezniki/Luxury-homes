import React, { useEffect, useState} from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect (() => {
        const storedStatus = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(storedStatus === 'true');
    }, []);

    const handleAuthClick = () => {
        const newStatus = !isLoggedIn;
        setIsLoggedIn(newStatus);
        localStorage.setItem('isLoggedIn', String(newStatus));
    }

    const [theme, setTheme] = useState('light');

    useEffect (() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <>
            <header className="luxury-header">
                <div className="luxury-header-container">
                    <h1 className="luxury-capsule-logo">Luxury Homes Capsule</h1>
                    
                    <nav className="luxury-capsule-nav">
                        <Link to="/">Home</Link>
                        <Link to="/favorites">Favorites</Link>
                    </nav>

                    <div className="luxury-auth-block">
                        <span className="luxury-greeting">
                            Hello, {isLoggedIn ? 'Igor' : 'guest'}
                        </span>
                        <button className="luxury-auth-button" onClick={handleAuthClick}>
                            {isLoggedIn ? 'Get out': 'Entry'}
                        </button>
                        <button className="luxury-theme-button" onClick={toggleTheme}>
                            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header