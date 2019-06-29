import React, { Component } from 'react';
import css_classes from './App.css';
import Persons from '../components/Persons/Person';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  // State is a property which can be named special property
  state = {
    persons: [
      {id: 'aoiuytr', name: 'Max', age: 28},
      {id: 'aarsdfh', name: 'Manu', age: 29},
      {id: 'ayjhretujb', name: 'Stephanie', age: 26}
    ],
    otherstate:'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>{
    // let persons = this.state.persons.slice();
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1); //this removes one element from the array
    this.setState({persons: persons});

  } 

  nameChangedHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
        return p.id === id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }


  togglePersonHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

  render() {
    // const customStyle = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   margin: '8px',
    //   padding: '10px',
    //   font: 'inherit',
    //   border: '1px solid yellow',
    //   cursor: 'pointer',
    // }

    let persons = null;





    if(this.state.showPersons){
      persons = <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          />
    }

 



    return (
        <div className={css_classes.App}>
          <Cockpit 
          showPersons={this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonHandler}  />
          {persons}
        </div>
    );
  }
}

export default App;
