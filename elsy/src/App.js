import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import HeartRate from './components/HeartRate';

const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000

class App extends Component {
  render() {
    return (

      <div>
        <Person/>
      </div>

    );
  }
}
export default App;

