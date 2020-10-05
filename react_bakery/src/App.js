import React, { Component } from 'react';
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay'
import Button from './components/core/Button'

class App extends Component {

  state = {
    activeTab : 'add',
    items : {}
  }
  renderContent (){
    switch(this.state.activeTab){
      case 'add':
        return <Add></Add>
        case 'pay':
          return <Pay></Pay>
          case 'list':
            return <List></List>
    }
  }

  render() {
    return (
      <div className ='App'>
        <Button isSelected={this.state.activeTab === 'add'} onClickFn={this.onClickTabAdd}>Add</Button>
        <Button isSelected={this.state.activeTab === 'list'} onClickFn={this.onClickTabList}>List</Button>
        <Button isSelected={this.state.activeTab === 'pay'} onClickFn={this.onClickTabPay}>Pay</Button>
        
        
        
      </div>
    );
  }
}

export default App;
