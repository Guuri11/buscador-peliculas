import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Movie extends Component {

    static propTypes = {
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }

    render() {
        const { poster, title, year } = this.props;
        return (
            <div className="card" style={{width:'18rem'}}>
                <img 
                    src={poster} 
                    className="card-img-top" 
                    alt={title}/>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{year}</p>
                </div>
            </div>
        )
    }
}