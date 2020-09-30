import React, { Component } from 'react';
import Person from './Person';
import HeartRate from './HeartRate';

import './css/bootstrap.min.css'
import './css/style.css'

/*const MIN_TEMPERATURE = -20        
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000*/

class App extends Component {

  constructor() {

    super()
  }

  state = {              //state avec les clés et valeurs

  water : 0,
  heart : 120,
  temperature : -10,
  steps : 3000,

  }
  onHeartChange (val) {
    
  }


  render() {
    return (

      <div className="container-fluid">             
        <Person></Person>              
        <HeartRate heart={this.props.MIN_HEART}></HeartRate>
      </div>

    );
  }
}
export default App;

// ligne 35 ajout du module Person en JSX
// ligne 36 module HeartRate + attribut heart avec la valeur(=)props (min)

