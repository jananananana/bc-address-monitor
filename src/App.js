import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Ledger from './components/Ledger';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Ledger />
        <AppFooter/>
      </div>
    );
  }
}

export default App;
