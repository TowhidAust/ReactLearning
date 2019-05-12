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

  switchNameHandler = (newName)=>{
    console.log("was clicked");
    // this.state.persons[0].name = "Maxmilian"; cant change directly
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manual Nuer', age: 29},
        {name: 'StephanieXYS', age: 26}
      ]
    })
  }

  nameChangedHandler = (event)=>{
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'StephanieXYS', age: 26 }
      ]
    })
  }

  render() {
    const customStyle = {
      backgroundColor: 'black',
      color: 'white',
      margin: '8px',
      padding: '10px',
      font: 'inherit',
      border: '1px solid yellow',
      cursor: 'pointer'
    }
    return (
      <div className="App">
         <h1>This is my first React App</h1>

         <button 
         style={customStyle}
         onClick={()=> this.switchNameHandler('Maximilian')}> SwitchName</button>
        <Person 
          name = {this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name = {this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'max')}
          changed={this.nameChangedHandler}> My Hobbies: Racing </Person>
        <Person 
          name = {this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
