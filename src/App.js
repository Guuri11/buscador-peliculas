import React, { Component } from 'react';
import './App.css';
import { Details } from './pages/details';
import { Home } from './pages/home';
import { Error404 } from './pages/error404';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detail/:id' component={Details} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
