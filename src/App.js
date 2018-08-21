import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 1.	Create a stateful parent controller with 2 stateless child components. Pass props and handlers from parent to child.
//Stateful parent component "ParentCompAverageCalc"
class ParentCompAverageCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numIncrease: 3,
      numDecrease: 8
    };
  }
  // Handler for child component "ChildComp1"
  childComp1IncrHandler = () => {
    this.setState({
      numIncrease: this.state.numIncrease+1
    });
  }
  // Handler for child component "ChildComp2"
  childComp2DecrHandler = () => {
    this.setState({
      numDecrease: this.state.numDecrease-1
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Excercise - Solved By Er. Debraj Ray</h1>
        </header>
        <p className="App-intro">
        1]	Create a stateful parent controller with 2 stateless child components. Pass props and handlers from parent to child.
        </p>
        {/* Props "incrValue" and handler "childComp1IncrHandler" passed from parent component "ParentCompAverageCalc" to child component "ChildComp1" */}
        <ChildComp1 onClick={this.childComp1IncrHandler} incrValue={this.state.numIncrease} />
        {/* Props "decrValue" and handler "childComp2DecrHandler" passed from parent component "ParentCompAverageCalc" to child component "ChildComp2" */}
        <ChildComp2 onClick={this.childComp2DecrHandler} decrValue={this.state.numDecrease} />
        <p>Average of {this.state.numIncrease} and {this.state.numDecrease} is <b>{(this.state.numIncrease + this.state.numDecrease)/2}</b></p>
      </div>
    );
  }
}

//stateless child component "ChildComp1"
const ChildComp1 = ({onClick, incrValue}) => (
  <div>
    <button onClick={onClick}>+</button>
    The numeric value#1 received from ParentComp is <b>{incrValue}</b> 
  </div>
)
//stateless child component "ChildComp2"
const ChildComp2 = ({onClick, decrValue}) => (
  <div>
    <button onClick={onClick}>-</button>
    The numeric value#2 received from ParentComp is <b>{decrValue}</b> 
  </div>
)

export default ParentCompAverageCalc;