import React from 'react';
import { render } from 'react-dom';

class Popular extends React.Component {
  constructor() {
    super();

    this.state = {

      movies: [],
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount() {

    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=<5f7b27b10525bbb17128770898960f83>')
    .then(res => res.json())
      .then(json => {
        this.setState({
          movies: json.results,

        })    
  } 

  render () {
    return (
      <div>

      <h1>Popular</h1>

      {this.state.movies.map((movie) => {
        return <Card data={movie}></Card>
        )}}

     
    </div>


    )
  }
 


      );
  }   
}   
    
  
  
      
  
}

export default Popular;
