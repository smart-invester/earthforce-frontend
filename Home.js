import React, { Component } from 'react'

export default class Home extends Component {
    render() {


        return (
            <div>
                <video playsinline autoplay muted loop poster="./Assets/Cloud.jpg" id="bgvideo" width="x" height="y">
                <source src="./Assets/video.mp4" type="video/mp4"/>
                </video>
            </div>
        )
    }
}
