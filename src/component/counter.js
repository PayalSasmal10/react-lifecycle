import React, { Component } from "react";

class Counter extends Component {
    
    componentDidUpdate(){
        console.log("componentDidUpdate : component updated");
    }

    render(){
        return (
            <div>
                <h1>{this.props.counter}</h1>
            </div>
        );
    }
}

export default Counter;