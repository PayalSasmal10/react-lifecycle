import React, { Component } from "react";
import Counter from "./component/counter";
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      count : 0,
      delete: false,
    }
  }

  componentDidMount(){
    console.log("componentDidMount : When component render first time");
  }

  increment(){
    this.setState({count : this.state.count + 1});
  }

  delete(){
    this.setState({delete: true})
  }

  render() {
    let CounterComponent;
    if(this.state)
    {
      CounterComponent =<Counter counter={this.state.count}/>
    }
    return (
      <div className="App">
        {/* <h1>{this.state.count}</h1> */}
        {/* <button onClick={this.increment.bind(this)}>Click Me</button>  // this is one of the way to increase the state */}
        {CounterComponent}
        <button onClick={() => {this.increment()}}>Click Me</button>
        {!this.count && <button onClick={() => {this.delete()}}>Delete Me</button>}
      </div>
    );
  }
}

export default App;
