// NavBar.js
import { useState, useEffect } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const [matches, setMatches] = useState(window.matchMedia("(min-width: 900px)").matches);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 900px)");
        const handleChange = (event) => {
            setMatches(event.matches);
            setIsNavOpen(false);
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <header className={`nav-bar ${isNavOpen ? "open" : ""}`}>
            {!matches && (<button className="toggle-button" onClick={() => setIsNavOpen(!isNavOpen)} aria-expanded={isNavOpen} aria-controls="primary-navigation" aria-label={isNavOpen ? "Close navigation" : "Open navigation"}>
                <span aria-hidden="true">{isNavOpen ? "×" : "☰"}</span>
            </button>)}
        <nav className="nav-content" id="primary-navigation" aria-label="Main navigation">
            <a className="nav-brand" href="#Home" onClick={() => setIsNavOpen(false)}>CI<span>.</span></a>
            <div className="nav-links">
                <a href="#Projects" onClick={() => setIsNavOpen(false)}>Work</a>
                <a href="#About" onClick={() => setIsNavOpen(false)}>About</a>
                <a href="#Contact" onClick={() => setIsNavOpen(false)}>Contact</a>
                <a href="#Certifications" onClick={() => setIsNavOpen(false)}>Certificate</a>
            </div>
            <a className="nav-github" href="https://github.com/IVY-CHRISTOPHER" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </nav>
        </header>
    );
};

export default NavBar;
