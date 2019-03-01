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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1); // removes o9ne element from the array state
    this.setState({persons:persons}); //updated persons state
  }
  // switchNameHandler = (newName) => {
  //   console.log("this is switch name handler");
  //   this.setState({
  //     persons: [
  //       {name: "Max", age:21},
  //       {name: "Manu", age: 31},
  //       {name: newName, age: 50}]  
  //   })
  // }

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
          {this.state.persons.map((person, index) => {
            return <Person click = {()=>this.deletePersonHandler(index)} name = {Person.name} age = {person.age}/>
          })}
            
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
