import React, { Component } from 'react';

class Icon extends Component {
  render() {
    return (
      <div> 

        <span class="material-icons"  style={{ fontSize: 100, color:this.props.name}}>
            {this.props.name}
          
        </span>
      </div>
    );
  }
}

export default Icon;
