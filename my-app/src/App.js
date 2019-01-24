import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Person from './Person/Person';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Hi this is my first React App</h1>
        <Person name="Max" age = "20" />
        <Person name="Manu" age = "30" />
        <Person name="Stephanie" age = "40"> My hobies: Racing </Person>
      </div>
    )
  }
}

export default App
