// NavBar.js
import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    };

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1000px)").matches
        )
    
    useEffect(() => {
        window
        .matchMedia("(min-width: 1000px)")
        .addEventListener('change', e => setMatches( e.matches ));
        }, []);

    return (
        <>
    <div className={`nav-bar ${isNavOpen ? "open" : ""}`}>
            {!matches && (<button className="toggle-button" onClick={toggleNav}>
                ☰
            </button>)}
        <div className="nav-content">
        {/* Your navigation links go here */}
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
        <a href="#Projects">Projects</a>
        <a href="#Certifications">Certifications</a>
        <a href="https://github.com/IVY-CHRISTOPHER">GitHub</a>
        </div>
    </div>
    </>
    );
};

export default NavBar;
