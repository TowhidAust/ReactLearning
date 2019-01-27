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
      
      other: "Some value",

      showPersons: false

  }

  switchNameHandler = (newName) => {
    console.log("this is switch name handler");
    this.setState({
      persons: [
        {name: "Max", age:21},
        {name: "Manu", age: 31},
        {name: newName, age: 50}]  
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age:21},
        {name: "Manu", age: 31},
        {name: event.target.value, age: 50}]  
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: "red",
      border: "1px solid #ddd",
      cursor: "pointer",
      borderRadius: "3px",
      color: "white",
      padding: "10px 15px"
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
            <Person 
            name = {this.state.persons[0].name} 
            age ={this.state.persons[0].age}
            click = {this.switchNameHandler.bind(this, "FountainPen")} 
            />

            <Person 
            name={this.state.persons[1].name} 
            age = {this.state.persons[1].age} />

            <Person 
            name={this.state.persons[2].name} 
            age = {this.state.persons[2].age}
            change={this.nameChangeHandler}> My hobies: Racing </Person>
        </div>
      )
    }
   
    return (
      <div className='App'>
        <button 
          style = {style}
          onClick = {this.togglePersonHandler} > Switch Name</button>
          <h1>Hi this is my first React App</h1>
          {persons}
      </div>
    )
  }
}

export default App
