import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css'; 
require('dotenv').config();

class GoogleMap extends Component {

    state = {
        showInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}, 
    }

    onMarkerClick = (props, marker, e) => {
        console.log(props)
        this.setState({
        selectedPlace: {name: props.event.title},
        activeMarker: marker,
        showingInfoWindow: true
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


    render() {
        const style = {
            border: '5px solid black',
            width: '70%',
            height: '70%',
            margin: '0 auto'
        }


        
        return (
            <div>
                 <Map  onClick={this.onMapClicked} 
                       google={this.props.google} 
                       zoom={3} 
                       style ={style} 
                       initialCenter={{lat: 45.5051, lng: -122.675}}>

                    { 
                        this.props.allEvents.map(event => (

                            <Marker onClick={this.onMarkerClick} 
                                    event={event}
                                    title={event.title} 
                                    // name={'WIll'} 
                                    position={{lat: event.geometries[0].coordinates[1], lng: event.geometries[0].coordinates[0]}} 
                                    icon={{ url: "/wildfire.png",  scaledSize: new window.google.maps.Size(50, 50)
                            }}/>
                           
                        ))

                    }
                    <InfoWindow 
                        onClose={this.onInfoWindowClose}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                       
                        <div>
                            <h5>{this.state.selectedPlace.name}</h5>
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