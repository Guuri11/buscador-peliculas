import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './movie';

export class MoviesList extends Component {
    static propTypes = { movies: PropTypes.array }

    render() {
        const { movies } = this.props
        const image_default = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
        return (
            <div className='container align-content-center'>
                <div className='row'>
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.imdbID} className='col-4 align-content-center align-items-center justify-content-center'>
                                <Movie 
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster === 'N/A' ? image_default:movie.Poster}
                                id={movie.imdbID}
                                />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}