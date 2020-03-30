import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const API_KEY = '66568b07';

export class Details extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params:PropTypes.object,
            isExact:PropTypes.bool,
            path:PropTypes.string,
            url: PropTypes.string
        })
    }
    state = { movie:{} }

    _fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
                .then(res => res.json())
                .then(movie => {
                    this.setState( { movie } )
                })
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this._fetchMovie({id})
    }
    render() {
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie;
        return (
            <div>
                <Link to={`/`}>
                    <button className='btn btn-primary'>Volver</button>
                </Link>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <span>{Plot}</span>
            </div>
        )
    }
}