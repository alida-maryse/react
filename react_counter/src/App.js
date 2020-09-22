import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'

class App extends Component {
  constructor(){
    super();
    this.incrementCount =this.incrementCount.bind(this)
    this.decrementCount =this.decrementCount.bind(this) // cette incrémentation bind oblige utiliser ce this
  }
  
  state = { count: 1 } // créer une fonction state nommé count qui démarre 1 cette ligne tjrs en dessous du constructor
  
  incrementCount() {
this.setState({count:this.state.count +1}) // pour l'incrément le counter sera à plus 1
  }

  decrementCount() {
    this.setState({count:this.state.count -1})

  }
  render() {
   
  return (

      <div className='App'>
        <h1>Counter</h1>
        <h2>{this.state.count} </h2>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>

        <Counter count={this.state.count}  // ajouter le composant Counter dans le render et lui ajouter les attributs...
        incrementFn={this.incrementCount} 
        decrementFn={this.decrementCount}/>
        

      </div>

    );
  }
}

export default App;

// méthode dans react=une fonction
// ligne 11 cad utiliser le count du state
// créer une balise button avec un onClick(tjrs dans le balisage) et lui passer la méthode
// pour déclarer c'est :
// quand on ne met rien entre 2 balises on peut l'écrire <Counter/>