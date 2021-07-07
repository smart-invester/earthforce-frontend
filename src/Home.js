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
        // nice use of react router props!
        this.props.history.push('/search');
        
    }
    render() {

        return (
            <div>
                <Player>
               <video id="bgvideo" loop autoPlay muted>
          
                 <source src="https://isorepublic.com/wp-content/uploads/2019/01/iso-republic-free-video-089.mp4" type="video/mp4" />
                 <source src="https://isorepublic.com/wp-content/uploads/2019/01/iso-republic-free-video-089.mp4" type="video/ogg" />

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


