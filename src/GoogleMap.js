import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import InfoWindow from './InfoWindowEx.js';
import './App.css';
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
            // drilling this deep into properties seems risky! might want to do some sanity checking to make sure you don't drill into an undefined property
            date: props.event.geometries[0].date.substring(0,10),
            lat: props.event.geometries[0].coordinates[1],
            lng: props.event.geometries[0].coordinates[0]
        },
        
        activeMarker: marker,
        showingInfoWindow: true,
        event: props.event
        });
    }

    onMapClicked = (props) => {
        // elegant piece of logic
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    
    render() {
        const style = {
            border: '2px solid black',
            width: '80%',
            height: '66%',
            margin: 'auto',
            top: '28%'
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


                            <div className="infowindow">
                            <h5>NAME:</h5> <h5 className="infowords"> {this.state.selectedPlace.name}</h5>
                            <h5>DATE:</h5> <h5 className="infowords"> {this.state.selectedPlace.date}</h5>
                            <h5>LATITUDE:</h5> <h5 className="infowords"> {this.state.selectedPlace.lat}</h5>
                            <h5>LONGITUDE:</h5> <h5 className="infowords"> {this.state.selectedPlace.lng}</h5>
                            </div>
                            
                       <button id="track" onClick={this.makeFavorite}>Track This Natural Event</button>

                          
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