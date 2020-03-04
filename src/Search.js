import React, { Component } from 'react'
import GoogleMap from './GoogleMap';
import request from 'superagent';
import './App.css';

export default class Search extends Component {
    state = { 
        favorites: [],
        input: '',
        coordinates: [],
        select: 8,
    }

    handleSelect = (e) => {
        this.setState({ select: e.target.value })
    }

    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://guarded-lake-55222.herokuapp.com/api/categories/${this.state.select}`)
        //Map through events and return an array of geometries.  
        const coordinates = data.body.events.map(event => {
            return event.geometries[0].coordinates
        })
        this.setState({
            coordinates: coordinates,
            allEvents: data.body.events,
        });
    }

    render() {
        return (
            <div>
                <form>
                    <select onChange= {this.handleSelect}id="events" name="events">
                        <option value='8'>wildfire</option>
                        <option value='10'>storm</option>
                        <option value='12'>volcanoes</option>
                    </select>
                    <button onClick={this.handleSearch}>Search!</button>
                </form>  
                <div>
                    {this.state.allEvents && <GoogleMap coordinates={this.state.coordinates}
                    allEvents={this.state.allEvents}/>}
                </div>
            </div>
        )
    }
}
