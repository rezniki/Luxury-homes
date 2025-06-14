import React from "react";
import "./style.css";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="luxury-footer">
                <div className="luxury-footer-container">
                    <p>© {new Date().getFullYear()} Luxury Homes Capsule. All rights reserved.</p>
                    <div className="luxury-footer-links">
                        <a href="#">Terms</a>
                        <a href="#">Primacy</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer