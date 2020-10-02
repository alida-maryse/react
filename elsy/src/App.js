import React, { Component } from 'react';
import Person from './Person';
import HeartRate from './HeartRate';

import './css/bootstrap.min.css'
import './css/style.css'
import Temperature from './components/Temperature'
import Water from './components/Water'

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

  onHeartChange(val){
    this.setState({
      heart: val

    })

  } 
    
    onStepsChange(val) {
      this.setState({
        steps: val

      })
    }
      
      onTemperatureChange(val) {
        this.setState({
          temperature: val

        })
      }
      calculateWater() {
        this.setState({
          water: ''

        })
      }

      render() {
        return (

          <div className="container-fluid">
            <Water water= {this.props.water}></Water>

            <Person min={MIN_STEPS}
              max={MAX_STEPS}
              onChange={this.onStepsChange}
              heart={this.state.steps}>


            </Person>
            <Temperature min={MIN_TEMPERATURE}
              max={MAX_TEMPERATURE}
              onChange={this.onTemperatureChange}
              heart={this.state.temperature}>

            </Temperature>

            <HeartRate min={MIN_HEART}
              max={MAX_HEART}
              onChange={this.onHeartChange}
              heart={this.state.heart}>


            </HeartRate>
        
          </div>

        );
      }
    }
    export default App;

// ligne 35 ajout du module Person en JSX
// ligne 36 module HeartRate + attribut heart avec la valeur(=)props (min)

