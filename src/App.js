import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Chart from './chart/chart'
import Covid from './covid/Covid'
import Error from './Error/error'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Covid} />
            <Route exact path="/statistics" component={Chart} />
            <Route exact path="/error" component={Error} />
            <Redirect to="/error" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
