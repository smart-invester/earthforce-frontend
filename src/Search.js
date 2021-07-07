import React, { Component } from 'react'
import GoogleMap from './GoogleMap';
import request from 'superagent';
import './search.css';
import './header.css';


export default class Search extends Component {
    state = {
        select: 8,
        allEvents: []
    }
    handleSelect = (e) => {
        this.setState({ select: e.target.value })
    }
    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://guarded-lake-55222.herokuapp.com/api/categories/${this.state.select}`)
        this.setState({
            allEvents: data.body.events,
        });
    }
    render() {
        return (
            <div className="search-container">
                <h3 id="searchtitle">Use the drop down menu to explore natural disasters across the globe. Select an event and choose events to follow.</h3>
                <form id="search">
                    <select onChange={this.handleSelect} id="events" name="events">
                    // would have liked to see these stored as an array of objects to map over and render these options
                        <option value='8'>Wildfire</option>
                        <option value='10'>Storm</option>
                        <option value='12'>Volcanoes</option>
                        <option value='6'>Drought</option>
                        <option value='7'>Dust And Haze</option>
                        <option value='9'>Floods</option>
                        <option value='13'>Water Color</option>
                        <option value='14'>Landslides</option>
                        <option value='15'>Sea And Lake Ice</option>
                        <option value='16'>Earthquake</option>
                        <option value='17'>Snow</option>
                        <option value='18'>Temperature Extremes</option>
                        <option value='19'>Manmade</option>
                    </select>
                    <button onClick={this.handleSearch}>Search!</button>
                </form>
                <div>
                    {this.state.allEvents && <GoogleMap allEvents={this.state.allEvents} user={this.props.user} />}
                </div>
            </div>
        )
    }
}