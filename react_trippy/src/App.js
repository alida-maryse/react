import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    class HomeContainer extends React.Component {
  render() {
    return (
      <div
        className='container-fluid'
        style={{
          fontFamily: 'Montserrat'
        }}>
        <div
          className='row'>
          <div
            className='col-lg-4 col-md-8 col-12'>
            <p>
              Je vérifie que les 2 mots : Voleur et <span style={{fontFamily: 'serif' }}>Voleur</span> ont une police d'écriture différente
            </p>
          </div>
          <div
            className='col-lg-8 col-md-4 col-12'>
            Une autre phrase
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
