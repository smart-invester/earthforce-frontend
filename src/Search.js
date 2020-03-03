import React, { Component } from 'react'

import request from 'superagent';

export default class Search extends Component {
    state = { 
        nasaObject: {},
        favorites: [],
        input: '',
    }

    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://guarded-lake-55222.herokuapp.com/api/nasa?search=${this.state.input}`)
    

        console.log(data.body)
        this.setState({
            nasaObject: data.body,
        });
    }

    render() {
        return (
            <div className='App'>
                <form>
                <input type = "date" min= "1995-06-20" max="2020-03-01" value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                </form>
                <button onClick={this.handleSearch}>Search!</button>
                <div> {this.state.nasaObject.title}</div>
                <img className = "image" src= {this.state.nasaObject.url} alt="" />
                <p>
                    {this.state.nasaObject.explanation}
                </p>    
    
            </div>
        )
    }
}
