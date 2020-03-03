import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
require('dotenv').config();



class GoogleMap extends Component {
    render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        return (
            <div>
                 <Map google={this.props.google} zoom={14} style ={style} initialCenter={{lat: 45.5051, lng: -122.675}}>
{/*  
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} /> */}
                    <Marker title={'Angela is right here!!!'} name={'Angela'} position={{lat:45.52349, lng:-122.681160}} icon={{
                    url: "/wildfire.png",
                    // anchor: new google.maps.Point(32,32),
                    // scaledSize: new google.maps.Size(64,64)
                }}/>

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