import React from 'react';
import {hot} from 'react-hot-loader';

import Oranges from './components/oranges/oranges';
import Bananas from './components/bananas/bananas';
import {Route, Link} from 'react-router-dom';

class App extends React.Component {

  render() {
    return(
      <div>
        <div>
          <h1>React Router</h1>
          <Link to="/bananas">Bananas</Link>
          <hr/>
          <Link to="/oranges">Oranges</Link>
        </div>
        <div>
          <Route
            path='/bananas'
            render={() => (
              <Bananas/>
            )}
          />
          <Route
            path='/oranges'
            render={() => (
              <Oranges/>
            )}
          />
        </div>
      </div>
    )
  }
}

export default hot(module)(App);
