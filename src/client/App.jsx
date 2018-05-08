import React from 'react';
import {hot} from 'react-hot-loader';

import Items from './components/items/items';

import {Route, Link} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>banana</h1>
        <Route
          path='/page/:id'
          render={() => (
            <Items />
          )}/>
      </div>
    );
  }
}

export default hot(module)(App);
