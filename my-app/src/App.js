import React, { Component } from 'react';
import css_classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
    let btnclass = '';





    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            // key should always be in the outer method
            // coz thats the element we actually replicate
            return <ErrorBoundary  key = {person.id}>
              <Person
              click={()=>this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            </ErrorBoundary>
          })}
        </div>
      );

      // customStyle.backgroundColor = "red";
      btnclass = css_classes.Red;
      
    }

    let classes = [];
    if(this.state.persons.length<=2){
      classes.push(css_classes.red);
    }
    if(this.state.persons.length<=1){
      classes.push(css_classes.bold)
    }



    return (
        <div className={css_classes.App}>
          <h1>This is my first React App</h1>
          <p className={classes.join(' ')}>This is really working</p>

          <button
          className={btnclass}
          onClick={this.togglePersonHandler}> SwitchName</button>
          {persons}
        </div>
    );
  }
}

export default App;
