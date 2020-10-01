import React, { Component } from 'react';
import Icon from './components/core/Icon'
import Slider from './components/core/Slider'


class HeartRate extends Component {
    render() {
        return (
            <div className="box col-md-2 col-6" >

                <Icon name="favorite" color="red"></Icon>
                <p>{this.props.heart}BPM</p>

                <Slider min={this.props.min}
                    max={this.props.max}                 // ajout module RCSlider
                    onChange={this.props.onChange} 
                    value={this.props.heart}>

                </Slider>



            </div>
        );
    }
}

export default HeartRate;
// ligne 12 ajout texte à la prop heart
// ligne 17 ajoute attribut value avec la prop nommée heart
