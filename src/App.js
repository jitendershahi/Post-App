import React, { Component } from 'react';
import './App.css';
import { Navbar } from './component/navbar/navbar';
import Routes from './container/routes/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
