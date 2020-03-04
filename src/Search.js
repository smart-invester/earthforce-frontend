import React, { Component } from 'react'
import GoogleMap from './GoogleMap';
import request from 'superagent';

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
                {/* We are conditionally rendering maps component only if(&&) the coordinates array has information(has a length) */}
                {this.state.coordinates.length && <GoogleMap coordinates={this.state.coordinates}/>}
            </div>
        )
    }
}
