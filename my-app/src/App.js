import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // State is a property which can be named special property
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherstate:'some other value'
  }

  switchNameHandler = ()=>{
    console.log("was clicked");
    // this.state.persons[0].name = "Maxmilian"; cant change directly
    this.setState({
      persons: [
        {name: 'Maxmilian', age: 28},
        {name: 'Manual Nuer', age: 29},
        {name: 'StephanieXYS', age: 26}
      ]
    })
  }

  render() {
    return (
      <div className="App">
         <h1>This is my first React App</h1>

         <button onClick={this.switchNameHandler}> SwitchName</button>
        <Person name = {this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing </Person>
        <Person name = {this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
