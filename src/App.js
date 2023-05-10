import React, { Component } from "react";
import Counter from "./component/counter";
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      count : 0,
    }
  }

  componentDidMount(){
    console.log("componentDidMount : When component render first time");
  }

  increment(){
    this.setState({count : this.state.count + 1});
  }

  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.count}</h1> */}
        {/* <button onClick={this.increment.bind(this)}>Click Me</button>  // this is one of the way to increase the state */}
        <Counter counter={this.state.count}/>
        <button onClick={() => {this.increment()}}>Click Me</button>
      </div>
    );
  }
}

export default App;
