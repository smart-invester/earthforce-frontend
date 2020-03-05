import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Relief.css';

export default class About extends Component {
    render() {
        return (
            <div className="about-container">

                <h1>Disaster Relief Agencies</h1>
                <p>Are you currently tracking a natural event with Earth-Force?</p>
                <p>Are you concerned about Climate Chanage and environmental degradation?</p>
                <p>The organizations below are dedicated to helping with with disaster relief, environmental protection and awareness.</p>
                
              

                <div className="team-container">

                    <div className="photo">
                        <h2>Americares</h2>
                        <img src='Americares.jpg' alt="Americares" />
                        <div className="socialicons">
                            <a href="https://www.linkedin.com/in/ziyizhao19/" className="Linkedin social" >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" /> </a>
                            <a href="https://github.com/avenger0901" className="GitHub social" >
                                <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        </div>
                    </div>

                    <div className="photo">
                        <h2>Direct Leaf</h2>
                        <img src='Direct_Leaf.png' alt="Direc Leaf" />

                        <div className="socialicons">
                            <a href="https://www.linkedin.com/in/eli-zevin/" className="Linkedin social" >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            <a href="https://github.com/dizzyjaguar" className="GitHub social">
                                <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        </div>
                    </div>

                    <div className="photo">
                        <h2>The Coalition for Rainforest Nations</h2>
                        <img src='rainforest.png' alt="The Colaition for Rainforest Nations" />

                        <div className="socialicons">
                            <a href="https://www.linkedin.com/in/kyleadevine/" className="Linkedin social">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            <a href="https://github.com/devinenoise" className="GitHub social">
                                <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        </div>
                    </div>
                    <div className="about-us-container-two">

                        <div className="photo">
                            <h2>Clean Air Task Force</h2>
                            <img src='clear_air_task_force.jpeg' alt="Clean Air Task Force" /></div>
                        <div className="socialicons">
                            <a href="https://www.linkedin.com/in/nicholas-roberto/" className="Linkedin social" >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            <a href="https://github.com/nrobert444" className="GitHub social">
                                <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        </div>
                    </div>

                    <div className="photo">
                        <h2>Rotary International</h2>
                        <img src='Rotary.jpg' alt="Rotary International" />

                        <div className="socialicons">
                            <a href="https://www.linkedin.com/in/rosalielee/" className="Linkedin social">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            <a href="https://github.com/rosalie337" className="GitHub social">
                                <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        </div>
                    </div>


                    <div className="photo">
                        <h2>United Nations Disaster Coordination</h2>
                        <img src='United_Nations_Disaster_Coordination.png' alt="UN Disaster Coordination" />
                        <div className="socialicons">
                            <a href="https://www.linkedin.com/in/willpiro/" className="Linkedin social">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            <a href="https://github.com/Shaka2Pass" className="GitHub social">
                                <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};