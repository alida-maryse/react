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

          const movies= json.results.map(elem) =>{
            return {
              title : elem.title
              description : elem.overview
              imgUrl : 'https://image.tmdb.org/t/p/w300/${elem.poster_path}
            }
          }
          this.setState({movies})

        })    
  } 

  render () {
    return (
      <div>

      <h1>Popular</h1>
      
      return {this.state.movies.map((movie) => { <Card data={movie}></Card>
        )}}

    </div>

    )
  }
 
      );
  }   
}   
      
}

export default Popular;
