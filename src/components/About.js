import React from "react";
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <h1 className="about-me">About Me</h1>
            <div className="container">
                <div className="left-section"> <span className="hi">Hi</span><br/>I am Nithin PK, full stack web developer, focusing on developing web applications using ANGULAR, NODE, HTML5 and SASS to build everything a user sees and interacts with on a website. If you want any websites with modern features please leave me a message.</div>
                <div className="middle-section"></div>
                <div className="right-section">
                    <h2>Professional Skills</h2>
                        <label>Web Design</label>
                    <div className="bar">
                        <div className="bar1"></div>
                    </div>
                    <label>Web Development</label>
                    <div className="bar">
                        <div className="bar1"></div>
                    </div>
                    <label>App Development</label>
                    <div className="bar">
                        <div className="bar1"></div>
                    </div>
                    <label>Blogging</label>
                    <div className="bar">
                        <div className="bar1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;