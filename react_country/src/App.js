import React, { Component } from 'react';
import Button from './components/Button'



class App extends Component {

  this.state = {
    name: '',
    capital: '',
    population: 0,
    region: '',
    flag: '',
    search: '',
  
  }

componentDidMount() {
// initialise les données 
//fetch pour récupérer les infos de l'URL
fetch('https://restcountries.eu/rest/v2/name/france')
.then(res => res.json())
.then(json => {
  this.setState({
    name: json[0].name,
    capital: json[0].capital,
    population: json[0].population,
    region: json[0].region,
    flag: json[0].flag
  })

}


    
render () {
return (

);

}





    

export default App;
