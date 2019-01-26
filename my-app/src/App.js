import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age:21},
      {name: "Manu", age: 31},
      {name: "Stephanie", age: 40}],
      
      other: "Some value"
  }

  switchNameHandler = () => {
    console.log("this is switch name handler");
    this.setState({
      persons: [
        {name: "Max", age:21},
        {name: "Manu", age: 31},
        {name: "Pen", age: 50}]  
    })
  }

  render () {
    return (
      <div className='App'>
        <h1>Hi this is my first React App</h1>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age ={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age = {this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}> My hobies: Racing </Person>
      </div>
    )
  }
}

export default App
