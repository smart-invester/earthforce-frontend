import React, { Component } from 'react'
import { Player, ControlBar, BigPlayButton } from 'video-react';
import request from 'superagent';

import './Home.css';

export default class Home extends Component {
    state = {
        usernameSignUp: '',
        passwordSignUp: '',
    }

    handleSignUp = async () => {
        const signUp = await request.post(`https://guarded-lake-55222.herokuapp.com/api/auth/signup`, {
            username: this.state.usernameSignUp,
            password: this.state.passwordSignUp,
            
        })
        this.props.setUser(signUp);
        localStorage.setItem('user', JSON.stringify(signUp.body));
        // this redirects the user after sign up
        this.props.history.push('/search');
        
    }
    render() {

        return (
            <div>
                <Player>
               <video id="bgvideo" loop autoPlay muted>
                 <source src="https://ak6.picdn.net/shutterstock/videos/1036814996/preview/stock-footage-amazon-rainforest-fire-from-space-satellite-view-shows-a-lot-of-fires-burning-in-the-brazilian.webm" type="video/mp4" />
                 <source src="https://ak6.picdn.net/shutterstock/videos/1036814996/preview/stock-footage-amazon-rainforest-fire-from-space-satellite-view-shows-a-lot-of-fires-burning-in-the-brazilian.webm" type="video/ogg" />
                    Your browser does not support the video tag.
                
                </video>
                <ControlBar autoHide={true} className="control-bar" />
                <BigPlayButton position={false} className="control-bar" />  
                </Player>

                <div class="content">

                <h1>EARTH-FORCE</h1>
                <h3>Outreach empowers you to create positive change for people and the planet with Geo tools.</h3>
                
                <div className="signup">
                Username:
                <input value={ this.state.usernameSignUp} onChange={(e) => this.setState({ usernameSignUp: e.target.value})} />
                Password:
                <input value={ this.state.passwordSignUp} type="password" onChange={(e) => this.setState({ passwordSignUp: e.target.value})} />
                <button onClick={ this.handleSignUp }>Sign up</button>

            </div>
                </div>
            </div>
        )
    }
}


