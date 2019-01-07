import React, { Component } from 'react';
import JumboTron from '../src/components/common/JumboTron';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>        
          <div className="jumbo"><JumboTron title="Welcome to Blockchain and Transactions!!!"/></div>
        </div>
    );
  }
}

export default App;
