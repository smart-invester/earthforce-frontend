import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Relief.css';

export default class Relief extends Component {
    render() {
        return (
            <div className="about-container">

                <h1 className="DisasterTitle">DISASTER RELIEF ORGANIZATIONS</h1>
                
                <div className="title-container">
                    <p>Are you currently tracking a natural event with Earth-Force?
                    Are you concerned about Climate Change and environmental degradation?
                    The organizations below are dedicated to helping with with disaster relief, environmental protection and awareness.</p>
                </div>
                
                <div className="flex-container">
                <div className="team-container">

                    <div className="photo">
                        
                        <img className='img-relief' src='Americares.jpg' alt="Americares" />
                        <div className="socialicons">
                        <h2 className="company">Americares</h2>
                            <a href="https://www.americares.org/" className="Linkedin social">americares.org</a>
                        </div>
                    </div>

                    <div className="photo">
                        <img className='img-relief' src='Direct_Leaf.png' alt="Direc Leaf" />

                        <div className="socialicons">
                        <h2 className="company">Direct Leaf</h2>
                            <a href="https://www.directrelief.org/" className="Linkedin social">directrelief.org</a>
                        </div>
                    </div>

                    <div className="photo">
                        <img className='img-relief' src='rainforest.png' alt="The Colaition for Rainforest Nations" />
                        <div className="socialicons">
                        <h2 className="company">Coalition for Rainforest Nations</h2>
                            <a href="https://www.rainforestcoalition.org/" className="Linkedin social">rainforestcoalition.org</a>
                        </div>
                    </div>
                    <div className="about-us-container-two">

                        <div className="photo">
                            <img className='img-relief' src='clear_air_task_force.jpeg' alt="Clean Air Task Force" /></div>
                        <div className="socialicons">
                            <h2 className="company">Clean Air Task Force</h2>
                            <a href="https://www.catf.us/" className="Linkedin social" >catf.us</a>
                        </div>
                    </div>

                    <div className="photo">
                        <img className='img-relief' src='Rotary.jpg' alt="Rotary International" />

                        <div className="socialicons">
                        <h2 className="company">Rotary International</h2>
                            <a href="https://www.rotary.org/en/rotary-helps-disaster-victims" className="Linkedin social">rotary.org</a>
                        </div>
                    </div>


                    <div className="photo">
                        <img className='img-relief' src='United_Nations_Disaster_Coordination.png' alt="UN Disaster Coordination" />
                        <div className="socialicons">
                        <h2 className="company">UNDC</h2>
                            <a href="https://www.unocha.org/our-work/coordination/un-disaster-assessment-and-coordination-undac" className="Linkedin social">unocha.org</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
};