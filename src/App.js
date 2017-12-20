import React, { Component } from 'react';
import './App.css';
import Search from './search.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Search Algos</h1>
        </header>
        <p className="App-intro">
         <Search />
        </p>
      </div>
    );
  }
}

export default App;
