import React, { Component } from 'react';


const API_KEY = ''
export class SearchForm extends Component {
    state = { inputMovie:'' }

    _handleOnChange = (e) => {
        this.setState( { inputMovie: e.target.value} )
    }

    _handleOnSubmit = (e) => {
        e.preventDefault();
        const { inputMovie } = this.state;
        console.log(inputMovie)
        fetch(`http://www.omdbapi.com/?s=${inputMovie}&apikey=${API_KEY}`)
                .then(res => res.json())
                .then(results => {
                    const { Search = [], totalResults='0'} = results
                    console.log({Search})
                    this.props.onResults(Search)
                })
    }
    render () {
        return (
            <form onSubmit={ this._handleOnSubmit }>
                <div className="input-group mb-3 form-group">
                    <input 
                        aria-describedby="button-addon2"
                        aria-label="El señor de los anillos..." 
                        className="form-control"
                        placeholder="El señor de los anillos..."
                        onChange={this._handleOnChange}
                        type="text"  
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" id="button-addon2">Buscar</button>
                    </div>
                </div>
            </form>
        )
    }
}
