import React, { Component } from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Slider extends Component {
    render() {
        return (

            <div>
                <RCSlider max={this.props.max}           // ajout module RCSlider ds la Div
                    min={this.props.min}
                    onChange={this.props.onChange}
                    value={this.props.value} >

                </RCSlider>    





            </div>
        );
    }
}

export default Slider;