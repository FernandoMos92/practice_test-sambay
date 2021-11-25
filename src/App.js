import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DescribeProduct from './Pages/DescribeProduct';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/describe" component={ DescribeProduct } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;