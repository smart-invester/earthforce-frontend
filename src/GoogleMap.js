import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css'; 
require('dotenv').config();

class GoogleMap extends Component {
    render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        const { coordinates } = this.props;
        
        return (
            <div>
                 <Map google={this.props.google} zoom={2} style ={style} initialCenter={{lat: 45.5051, lng: -122.675}}>
                    { 
                        coordinates.map(coordinate => (

                            <Marker className = 'event-sign' title={'Angela is right here!!!'} name={'Angela'} position={{lat: coordinate[1], lng: coordinate[0]}} icon={{
                            url: "/wildfire.png",  scaledSize: new window.google.maps.Size(50, 50)
                            }}/>
                           
                        ))
                        



                    }
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                        hiiiiiiiiiiiiiiiii
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