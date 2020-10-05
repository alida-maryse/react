import React, { Component } from 'react';



class Button extends Component {

  
  render() {
    const myButtonClass = this.props.isSelected? 'btn btn-primary':'btn btn-outline-secondary';
    return (
    
        <button type ='button' className ={myButtonClass} onClick= {this.props.onClickFn}>{this.props.children}</button>     
      
    );
  }
}

export default Button;
