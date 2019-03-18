import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>;
    }
   
      return (
        <div className='App'>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler} />
          {persons}
        </div>
    );
    


  }
}

export default App;
