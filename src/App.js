import React, { Component } from 'react';
import './App.css';
import { Title } from './components/title' ;
import { SearchForm } from './components/searchForm';
import { MoviesList } from './components/movieslist';

class App extends Component {
  state = { results: [], usedSearch:false };

  _handleResults = (results) => {
    this.setState({ results, usedSearch:true })
  }

  _renderResults(){
    return(
      this.state.results.length === 0 
        ? 'Sin resultados'
        : <MoviesList movies={this.state.results}/>
    )
  }

  render(){
    return (
      <div className="App">
        <Title>Buscador de peliculas</Title>
        <div className='container'>
          <SearchForm onResults={this._handleResults}/>      
        </div>
          {
            this.state.usedSearch
            ? this._renderResults()
            : <p>Introduce el titulo de alguna pelicula</p>
          }
      </div>
    );
  }
}

export default App;
