import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      {id: "hfgd", name: "Max", age:21},
      {id: "dfvxc", name: "Manu", age: 31},
      {id: "zsagvf", name: "Stephanie", age: 40}],
      
      other: "Some value",

      showPersons: false

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //spread operator which creates a copy
    persons.splice(personIndex,1); // removes o9ne element from the array state
    this.setState({persons:persons}); //updated persons state
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id===id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
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
      padding: "10px 15px",

      ':hover' : {
        backgroundColor: 'yellow',
        color: 'black'

      }
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    click = {()=>this.deletePersonHandler(index)} 
                    name = {person.name} 
                    age = {person.age}
                    key= {person.id}
                    changed = {(event)=>this.nameChangeHandler(event, person.id)}/>
          })}
            
        </div>
      );

      style.backgroundColor = "green";
      style[':hover'] = {
        backgroundColor: 'lightblue',
        color: 'white'
      }
    }
   

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red') // ['red']
    }

    if(this.state.persons.length <=1){
      classes.push("bold") // ['red','bold']
    }

    return (
      <StyleRoot>
            <div className='App'>
                <button 
                  style = {style}
                  onClick = {this.togglePersonHandler} > Switch Name</button>
                  <h1>Hi this is my first React App</h1>
                  <p className = {classes.join(' ')}>this is really working</p>
                  {persons}
            </div>
      </StyleRoot>
      
    )
  }
}

export default Radium(App);
