import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class App extends Component {
  render() {
    return (
        <div>
            <span>{this.props.store.counter}</span><br/>
            <button onClick={this.props.store.Increment}>+1</button>
            <button onClick={this.props.store.Decrement}>-1</button>
        </div>
    )
  }

}

export default App
