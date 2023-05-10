import React, { Component } from "react";

class Counter extends Component {

    componentWillUnmount(){
        console.log("componentWillUnmount : Removed the state");
    }
    
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