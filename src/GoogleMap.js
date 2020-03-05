import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import InfoWindow from './InfoWindowEx.js';
import './App.css';
import request from 'superagent';
require('dotenv').config();


//delete me later

class GoogleMap extends Component {

    state = {
        showInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }

    onMarkerClick = (props, marker, e) => {
        console.log(props)
        this.setState({
        selectedPlace: {name: 
            props.event.title,
            date: props.event.geometries[0].date,
            lat: props.event.geometries[0].coordinates[1],
            lng: props.event.geometries[0].coordinates[0]
        },
        
        activeMarker: marker,
        showingInfoWindow: true,
        event: props.event
        });
    }

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };


    makeFavorite = async (props) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const favorite = await request.post('https://guarded-lake-55222.herokuapp.com/api/me/favorites',{
            title: this.state.event.title,
            date: this.state.event.geometries[0].date

        } )
        .set('Authorization', user.token)
        
    }
    
    render() {
        const style = {
            border: '5px solid black',
            width: '70%',
            height: '70%',
            margin: 'auto',
            top: '20%'
        }

        return (
            <div className="map">
                <Map onClick={this.onMapClicked}
                    google={this.props.google}
                    zoom={3}
                    style={style}
                    initialCenter={{ lat: 45.5051, lng: -122.675 }}>

                    {
                        this.props.allEvents.map((event, index) => (

                            <Marker onClick={this.onMarkerClick}
                                event={event}
                                title={event.title}
                                key={index} 
                                position={{ lat: event.geometries[0].coordinates[1], lng: event.geometries[0].coordinates[0] }}
                                icon={{
                                    url: "/wildfire.png", scaledSize: new window.google.maps.Size(50, 50)
                                }} />

                        ))

                    }
                    <InfoWindow
                        onClose={this.onInfoWindowClose}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>


                       <button onClick={this.makeFavorite} >Add to Mavorites</button>
                       
                            <h5>NAME: {this.state.selectedPlace.name}</h5>
                            <h5>DATE: {this.state.selectedPlace.date}</h5>
                            <h5>LATITUDE: {this.state.selectedPlace.lat}</h5>
                            <h5>LONGITUDE: {this.state.selectedPlace.lng}</h5>
    
                            

                          
                        </div>

                    </InfoWindow>

                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_KEY
})(GoogleMap)