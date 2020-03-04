import React, { Component } from 'react'
import GoogleMap from './GoogleMap';
import request from 'superagent';

export default class Search extends Component {
    state = { 
        nasaObject: {},
        favorites: [],
        input: '',
        coordinates: [],
    }

    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://guarded-lake-55222.herokuapp.com/api/nasa?search=${this.state.input}`)
    
        //Map through events and return an array of geometries.  
        const coordinates = data.body.events.map(event => {
            return event.geometries[0].coordinates
        })

        // console.log('HEY NICK',coordinates)
        // console.log(data.body.events)
        this.setState({
            coordinates: coordinates,
        });
    }

    render() {
       
        return (
            <div className='App'>
                <form>
                <select id="events" name="events">
                    <option value= '8'>wildfire</option>
                    <option value='10'>storm</option>
                    <option value='12'>volcanoes</option>
                </select>
                <button onClick={this.handleSearch}>Search!</button>
                </form>
                
                <div> {this.state.nasaObject.title}</div>
                <img className = "image" src= {this.state.nasaObject.url} alt="" />
                <p>
                    {this.state.nasaObject.explanation}
                </p>    
                {/* We are conditionally rendering maps component only if(&&) the coordinates array has information(has a length) */}
                {this.state.coordinates.length && <GoogleMap coordinates={this.state.coordinates}/>}

            </div>
        )
    }
}
