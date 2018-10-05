import * as React from 'react';
import './App.css';

import TripLayout from './components/TripLayout/TripLayout';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TripLayout />
      </div>
    );
  }
}

export default App;
