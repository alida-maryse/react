import React, { Component } from 'react';
import Icon from './components/core/Icon'
import Slider from './components/core/Slider'

class Person extends Component {
  render() {
    return (
      <div className="box col-md-2 col-6" style={{ fontSize: 100, color: "black" }}>

        <span class="material-icons">
          directions_walk
        </span>
        <p>{this.props.steps}steps</p>

        <Slider min={this.props.min}
          max={this.props.max}
          onChange={this.props.onChange}
          value={this.props.steps}>

        </Slider>
      </div>
    );
  }
}

export default Person;
