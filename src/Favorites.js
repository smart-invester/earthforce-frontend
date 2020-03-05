import React, { Component } from 'react'
import request from 'superagent'
import './favorites.css'

export default class Favorites extends Component {
    state = {
        faves: {}
    }
    
    
    componentDidMount = async() => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
         
        const faves = await request.get(`https://guarded-lake-55222.herokuapp.com/api/me/favorites`).set('Authorization', user.token);

        const favorite = faves.body[0]
        this.setState({ faves: favorite })
        console.log(this.state.faves)
    }

    // getFavorites = async() => {
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     const faves = await request.get(`https://guarded-lake-55222.herokuapp.com/api/me/favorites`).set('Authorization', user.token);

    //     this.setState({ faves: faves.body })
    // }




    render() {
        
        return (
            <div>
                

                <h4> {this.state.faves.title} </h4>
                <p></p>
                
            </div>
        )
    }
}
