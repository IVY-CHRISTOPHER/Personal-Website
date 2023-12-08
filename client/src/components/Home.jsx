/* eslint-disable react/no-unescaped-entities */
import React, {useState} from "react";
import wave from "../assets/wave.png"
import Certificate from "../assets/Certificate.jpg"
import ColorMaster from "../assets/Projects/Javascript/ColorMasters.jpg"
import Selfi from "../assets/Selfi.jpg"
import "../styles/Home.css"

const Home = () => {

    return (
        <div className="container">
            <h1 className="welcome" id="Home">Full-Stack Web Dev / Aspiring Game Dev</h1>
            <div className="info">
                <img style={{width: "25%", borderRadius: "50%", border: "solid black"}} src={Selfi} alt="Headshot" />
                <div>
                    <h1>Hi! <img src={wave} alt="Wave" style={{width: "10%", marginBottom: "1px"}}/></h1> 
                </div>
                <p>
                    Im <strong>Chris</strong>, Full-Stack Web Dev, Aspiring C# game dev, Animal Lover, Hard Worker, and Late night Coffee Sipper!
                    Basically i'm the perfect candidate for your role! </p>

                <p>A few key web development languages in which I am proficient include <strong><a href="#Java" style={{ color: "Red" }}>Java</a></strong>, <strong><a href="#Python" style={{ color: "#c29115" }}>Python</a></strong>, 
                    and <strong><a href="#Mern" style={{ color: "blue" }}>MERN</a></strong>. 
                    Additionally, I am familiar with concepts such as <strong>React</strong>, <strong>Flask</strong>, and <strong>Node</strong>.
                </p>
            </div>
            <hr/>
            <div  className="Projects" id="Projects">
                <h1 className="MyProjects">My Projects</h1>
                <div className="Java" id="Java">
                    <h2>Java - Not Deployed</h2>
                    <h3>GitHub Links</h3>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/CodingDojoJAVAProjects/tree/main/SaveTravels">Save Travels</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/CodingDojoJAVAProjects/tree/main/dojosandninjas">Dojos and Ninjas</a>
                </div>

                <div className="Python" id="Python">
                    <h2>Python - Not Deployed</h2>
                    <h3>GitHub Links</h3>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/flask_projects/Dojo%20Survey">Dojo Survey</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/flask_projects/PLayground">Playground Assignment</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/flask_projects/W3L3_form">Creating a Form</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/flask_projects/html%20table">Creating a Table with Flask</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/flask_projects/project_counter">Counter Assignment</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/fundamentals/hello_flask">Hello Flask</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Books">Books Assignment</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Coding%20Dojo%20Wall">Dojo Wall</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Cookie_Orders">Cookie Orders</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Dojos_and_Ninjas">Dojos and Ninjas</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Login_And_Registration">Login and Registration</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Users_CR">Users_CR</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/burgers">Burgers</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/validation">Bcrypt Practice</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/fundamentals/introduction/basics/BankAccounts">Bank Accounts</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/fundamentals/introduction/basics/Users_with_Bank_Accounts">Users With Bank Accounts</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/fundamentals/introduction/bots">Bots</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/blob/master/fundamentals/oop/Chaining_Prac/Christopher_Ivy_Chaining_assignment.py">Chaining Assignment</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python">All Of My Python Experience</a>
                </div>

                <div className="Mern" id="Mern">
                    <h2>Mern - Deployed</h2>
                    <h3>Color Master</h3>
                    <a href="http://3.133.98.214/home"><img style={{width: "20%", border: "solid black 5px"}} onMouseOver={(e) => {e.target.className="ProjectsOnHover"}} onMouseOut={(e) => {e.target.className=""}} src={ColorMaster} alt="Color Master Home Image" /> </a>
                    <p>The is an application which allows guests to collect a random generated list of colors and move them around. This also allows a user that is logged in to create and save favorite colors.</p>
                    <h3>GitHub Links</h3>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/Personal-Projects/tree/main/RainbowRoulette/client">Random Operator Generator For Rainbow Six Siege</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/projects">My Solo Project For The Coding Dojo - Social Media Site</a> <br/>
                    <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/mern-july">All Of My Mern Experience</a>
                </div>
            </div>
            <div id="About" className="About">
                <h1>All About Me! (Chris)</h1>
                <p>
                    Who?    :   Christopher Cameron Don Ivy <br/>
                    What?   :   I am a Certified Full-Stack web developer that is interested in game development <br/>
                    Where?  :   Springdale, AR <br/>
                    When?   :   I graduated the Coding Dojo in 08/23 but my love for coding dates back many of years<br/>
                    Why?    :   To eventually make a video game myself and many others will love and enjoy<br/>
                    How?    :   I will achieve this dream by working hard and everyday, coding, learning, and testing myself! <br/>
                </p>
            </div>
            <div className="Contact" id="Contact">
                <h1>Contact Me</h1>
                <h2>Email</h2>
                <p>chrisivy22703@gmail.com</p>
                <h2>LinkedIn</h2>
                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://www.linkedin.com/in/christopher-ivy-dev/">Christopher Ivy</a>
            </div>
            <div className="Certifications" id="Certifications">
                <h1>Coding Dojo Certificate</h1>
                <a href="https://app.diplomasafe.com/en-US/diploma/da9e865061acdcb92e1957c3eb54a7310c694e7d4" ><img style={{width: "15rem", border: "solid black 5px"}} onMouseOver={(e) => {e.target.className="CertificationsOnHover"}} onMouseOut={(e) => {e.target.className=""}} src={Certificate} alt="Coding Dojo Certificate" /> </a> 
            </div>
            <div className="attributions">
                <a href="https://www.flaticon.com/free-icons/hello" title="hello icons">Hello icons created by Kalashnyk - Flaticon</a>
            </div>
        </div>
        
    )
}

export default Home