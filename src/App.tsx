import * as React from 'react';

import { Route } from 'react-router-dom';

// Pages

import { MyBookings } from './pages';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
				<Route exact path='/' component={MyBookings} />
      </div>
    );
  }
}

export default App;
