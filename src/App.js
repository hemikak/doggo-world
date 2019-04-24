import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/img/doggo-greeter.jpg'} className="App-logo" alt="logo" />
          <p>
            Welcome to Doggo World!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
