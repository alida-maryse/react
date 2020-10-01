import React, { Component } from 'react';
import Person from './Person';
import HeartRate from './HeartRate';

import './css/bootstrap.min.css'
import './css/style.css'
import Temperature from './components/Temperature'

const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000

class App extends Component {

  constructor() {

    super()

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }

    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepstChange = this.onStepsChange.bind(this)
    this.onTemperatureChange = this.onTemperatureChange.bind(this)

  }

  onHeartChange(val) {
    this.setState({
      heart: val

    })

    onStepsChange(val) {
      this.setState({
        steps: val

      })
      onTemperatureChange(val) {
        this.setState({
          temperature: val

        })


      }

      render() {
        return (

          <div className="container-fluid">
            <Person></Person>
            <HeartRate min={MIN_HEART}
              max={MAX_HEART}
              onChange={this.onHeartChange}
              heart={this.state.heart}>


            </HeartRate>
            <Temperature></Temperature>
          </div>

        );
      }
    }
    export default App;

// ligne 35 ajout du module Person en JSX
// ligne 36 module HeartRate + attribut heart avec la valeur(=)props (min)

