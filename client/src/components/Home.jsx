/* eslint-disable react/no-unescaped-entities */
import wave from "../assets/wave.png"
import Certificate from "../assets/Certificate.jpg"
import ColorMaster from "../assets/Projects/Javascript/ColorMasters.jpg"
import Selfi from "../assets/Selfi.jpg"
import ContactForm from "./ContactForm"
import "../styles/Home.css"

const Home = () => {

    return (
        <main className="home-page">
            <div className="container">
                <section className="hero" id="Home">
                    <div className="hero-content">
                        <div className="hero-copy">
                            <p className="eyebrow">Portfolio <span>·</span> Springdale, Arkansas</p>
                            <h1>Building for the web.<br /><span>Dreaming beyond it.</span></h1>
                            <p className="hero-description">I'm Chris Ivy, a full-stack developer and aspiring game developer who loves turning curious ideas into useful, thoughtful experiences.</p>
                            <div className="hero-actions">
                                <a className="button button-primary" href="#Projects">Explore my work <span aria-hidden="true">↘</span></a>
                                <a className="button button-text" href="#Contact">Get in touch <span aria-hidden="true">↗</span></a>
                            </div>
                            <p className="hero-skills">JAVA <span>/</span> PYTHON <span>/</span> MERN <span>/</span> C#</p>
                        </div>
                        <div className="hero-portrait-wrap">
                            <div className="portrait-accent" aria-hidden="true">CHRIS<br />IVY</div>
                            <img className="hero-portrait" src={Selfi} alt="Portrait of Chris Ivy" />
                            <div className="portrait-note"><img src={wave} alt="" /> Nice to meet you</div>
                        </div>
                    </div>
                    <a className="hero-scroll" href="#Projects">Scroll to explore <span aria-hidden="true">↓</span></a>
                </section>
                <hr/>
                <section className="projects" id="Projects">
                    <div className="section-heading">
                        <p className="eyebrow">Selected experience</p>
                        <h2 className="myProjects">A little of what I make<span>.</span></h2>
                        <p className="section-intro">From full-stack experiments to the foundations that got me here.</p>
                    </div>
                    <div className="java" id="Java">
                        <h2>Java - Not Deployed</h2>
                        <h3>GitHub Links</h3>
                        <ul>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/CodingDojoJAVAProjects/tree/main/SaveTravels">Save Travels</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/CodingDojoJAVAProjects/tree/main/dojosandninjas">Dojos and Ninjas</a>
                            </li>
                        </ul>
                    </div>

                    <div className="python" id="Python">
                        <h2>Python - Not Deployed</h2>
                        <h3>GitHub Links</h3>
                        <ul>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/flask_projects/Dojo%20Survey">Dojo Survey</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/flask_projects/PLayground">Playground Assignment</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/flask_projects/W3L3_form">Creating a Form</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/flask_projects/html%20table">Creating a Table with Flask</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/flask_projects/project_counter">Counter Assignment</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask/fundamentals/hello_flask">Hello Flask</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Books">Books Assignment</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Coding%20Dojo%20Wall">Dojo Wall</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Cookie_Orders">Cookie Orders</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Dojos_and_Ninjas">Dojos and Ninjas</a> 
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Login_And_Registration">Login and Registration</a> 
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/Users_CR">Users_CR</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/crud/burgers">Burgers</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/flask_mysql/validation">Bcrypt Practice</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/fundamentals/introduction/basics/BankAccounts">Bank Accounts</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/fundamentals/introduction/basics/Users_with_Bank_Accounts">Users With Bank Accounts</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/tree/master/fundamentals/introduction/bots">Bots</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python/blob/master/fundamentals/oop/Chaining_Prac/Christopher_Ivy_Chaining_assignment.py">Chaining Assignment</a>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/python">All Of My Python Experience</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mern" id="Mern">
                        <h2>Mern - Deployed</h2>
                        <h3>Color Master</h3>
                        <a href="http://3.133.98.214/home"><img style={{width: "30%", border: "solid black 5px"}} onMouseOver={(e) => {e.target.className="ProjectsOnHover"}} onMouseOut={(e) => {e.target.className=""}} src={ColorMaster} alt="Color Master Home Image" /> </a>
                        <p>Color Master is an application which allows guests to collect a random generated list of colors and move them around. This also allows a user that is logged in to create and save favorite colors.</p>
                        <h3>GitHub Links</h3>
                        <ul>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/Personal-Projects/tree/main/RainbowRoulette/client">Random Operator Generator For Rainbow Six Siege</a> <br/>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/projects">My Solo Project For The Coding Dojo - Social Media Site</a> <br/>
                            </li>
                            <li>
                                <a onMouseOver={(e) => {e.target.id="Github"}} onMouseOut={(e) => {e.target.id=""}} href="https://github.com/IVY-CHRISTOPHER/mern-july">All Of My Mern Experience</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <div id="About" className="about">
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
                <div className="contact" id="Contact">
                    <h1>Contact Me</h1>
                    <div className="contact-copy">
                        <p className="eyebrow">Have a project in mind?</p>
                        <p>Share a few details and I will get back to you as soon as I can.</p>
                        <h2>Email</h2>
                        <a href="mailto:chrisivy22703@gmail.com">Chris@ivyssoftware.com</a>
                        <h2>LinkedIn</h2>
                        <a href="https://www.linkedin.com/in/christopher-ivy-dev/" target="_blank" rel="noreferrer">Christopher Ivy <span aria-hidden="true">↗</span></a>
                    </div>
                    <ContactForm />
                </div>
                <div className="certifications" id="Certifications">
                    <h1>Coding Dojo Certificate</h1>
                    <a href="https://app.diplomasafe.com/en-US/diploma/da9e865061acdcb92e1957c3eb54a7310c694e7d4" ><img style={{width: "15rem", border: "solid black 5px"}} onMouseOver={(e) => {e.target.className="CertificationsOnHover"}} onMouseOut={(e) => {e.target.className=""}} src={Certificate} alt="Coding Dojo Certificate" /> </a> 
                </div>
                <div className="attributions">
                    <a href="https://www.flaticon.com/free-icons/hello" title="hello icons">Hello icons created by Kalashnyk - Flaticon</a>
                </div>
            </div>
        </main>
        
    )
}

export default Home