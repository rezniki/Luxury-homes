import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <>
            <header className="luxury-header">
                <div className="luxury-header-container">
                    <h1 className="luxury-capsule-logo">Luxury Homes Capsule</h1>
                    <nav className="luxury-capsule-nav">
                        <Link to="/">Home</Link>
                        <Link to="/favorites">Favorites</Link>
                    </nav>
                </div>
            </header>
        </>
    )
};

export default Header