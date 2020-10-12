import React from 'react';

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      image: '/placeholder.png'
    }

  }

  componentDidMount() {
    var newPhoto = `https://image.tmdb.org/t/p/w300/${this.props.data.poster_path}`;

    this.setState({ image: newPhoto })

  }

    
  render() {
    return (
      <div className='Card'>

      <img style={{ width: '80px' }} src={this.state.image} alt={this.props.data.title} />
      <p>{this.props.data.title}</p>
      <p>{this.props.data.overview}</p>


    </div>


    );
      
  
  }
}
export default Card;