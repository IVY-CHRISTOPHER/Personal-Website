import React, {useState} from "react";
import { Link } from "react-router-dom"
import "../styles/Nav.css"

const Nav = () => {
    return (
        <>
        <div className="background">
            <div className="Container">
                <h1><a href="#About">Christopher Ivy</a></h1>
                <ul className="list">

                    <li><a href="#Home" className="links" 
                    onMouseOver={(e) => {e.target.className="onhover"}}
                    onMouseOut={(e) => {e.target.className="links"}}>Home</a></li>

                    <li><a href="#Projects" className="links" 
                    onMouseOver={(e) => {e.target.className="onhover"}}
                    onMouseOut={(e) => {e.target.className="links"}}>Projects</a></li>

                    <li><a href="#About" className="links" 
                    onMouseOver={(e) => {e.target.className="onhover"}}
                    onMouseOut={(e) => {e.target.className="links"}}>About</a></li>

                    <li><a href="#Contact" className="links" 
                    onMouseOver={(e) => {e.target.className="onhover"}}
                    onMouseOut={(e) => {e.target.className="links"}}>Contact</a></li>

                    <li><a href="#Certifications" className="links" 
                    onMouseOver={(e) => {e.target.className="onhover"}}
                    onMouseOut={(e) => {e.target.className="links"}}>Certifications</a></li>

                    <li><a href="https://github.com/IVY-CHRISTOPHER" className="links" 
                    onMouseOver={(e) => {e.target.className="onhover"}}
                    onMouseOut={(e) => {e.target.className="links"}}>GitHub</a></li>
                <hr/>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Nav