import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './aboutteam.css';
 
export default class About extends Component {
    render() {
        return (
            <div className="about-container">

                <h1>ABOUT OUR TEAM</h1>
                <p>Earth-Force development is led by a small dedicated team working full time at Alchemy Code Lab.</p>
                <p>Team members worked full time for one week utlizing React components and third-party APIs. The team compiled and utilized NASA and Google Maps APIs to create Earth-Force's application.</p>
                <p>Current members of the Earth-Force team are listed in alphabetical order below.</p>

                    <div className="team-container">

                    <div className="photo">
                        
                        <img src='Angela.jpeg' alt="Angela" />
                        <a href="https://www.linkedin.com/in/ziyizhao19/" className="Linkedin social" >
                        <FontAwesomeIcon icon={ faLinkedin } size="2x" /> </a>
                        <a href="https://github.com/avenger0901" className="GitHub social" >
                        <FontAwesomeIcon icon={ faGithub } size="2x" /></a>
                    </div>
                    
                    <div className="photo">
                        <img src='Eli.jpeg' alt="Eli" />
                    
                    
                        <a href="https://www.linkedin.com/in/eli-zevin/" className="Linkedin social" >
                        <FontAwesomeIcon icon={ faLinkedin } size="2x" /></a>
                        <a href="https://github.com/dizzyjaguar" className="GitHub social">
                        <FontAwesomeIcon icon={ faGithub } size="2x" /></a>
                    </div>

                    <div className="photo">
                        <img src='Kyle.jpeg' alt="Kyle" />
                    
                    
                        <a href="https://www.linkedin.com/in/kyleadevine/" className="Linkedin social">
                        <FontAwesomeIcon icon={ faLinkedin } size="2x" /></a>
                        <a href="https://github.com/devinenoise" className="GitHub social">
                        <FontAwesomeIcon icon={ faGithub} size="2x" /></a>
                    </div>
                    <div className="about-us-container">
                    
                    <div className="photo">
                        <img src='Nick.jpeg' alt="Nick"/></div>
                    
                        <a href="https://www.linkedin.com/in/nicholas-roberto/" className="Linkedin social" >
                        <FontAwesomeIcon icon={ faLinkedin } size="2x" /></a>
                        <a href="https://github.com/nrobert444" className="GitHub social">
                        <FontAwesomeIcon icon={ faGithub} size="2x" /></a>
                    </div>

                    <div className="photo">
                        <img src='Rosalie.jpeg' alt="Rosalie" />
                        
                    
                        <a href="https://www.linkedin.com/in/rosalielee/" className="Linkedin social">
                        <FontAwesomeIcon icon={ faLinkedin } size="2x" /></a>
                        <a href="https://github.com/rosalie337" className="GitHub social">
                        <FontAwesomeIcon icon={ faGithub} size="2x" /></a>
                    </div>


                    <div className="photo">
                        <img src='Will.jpeg' alt="Will"/>
                    
                        <a href="https://www.linkedin.com/in/willpiro/" className="Linkedin social">
                        <FontAwesomeIcon icon={ faLinkedin } size="2x" /></a>
                        <a href="https://github.com/Shaka2Pass" className="GitHub social">
                        <FontAwesomeIcon icon={ faGithub} size="2x" /></a>
                    
                    </div>
                    </div>
                    </div>
        )
    }
};
