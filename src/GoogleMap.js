import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
require('dotenv').config();

class GoogleMap extends Component {
    render() {
        const style = {
            border: '5px solid black',
            width: '70%',
            height: '70%',
            margin: '0 auto'
            

            

        }
        const { coordinates } = this.props;
        
        return (
            <div>
                 <Map  google={this.props.google} zoom={3} style ={style} initialCenter={{lat: 45.5051, lng: -122.675}}>
                    { 
                        coordinates.map(coordinate => (

                            <Marker title={'Angela is right here!!!'} name={'Angela'} position={{lat: coordinate[0], lng: coordinate[1]}} icon={{
                            url: "/wildfire.png",
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