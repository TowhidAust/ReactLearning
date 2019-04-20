import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
 
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
  
    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    if(props.persons.length <= 2){
        assignedClasses.push('red') // ['red']
    }

    if(props.persons.length <=1){
        assignedClasses.push("bold") // ['red','bold']
    }

    return (
        <div className = {classes.Cockpit}>
            <h1>Hi this is my first React App</h1>
            <p className = {assignedClasses.join(' ')}>this is really working</p>
            <button 
                className = {btnClass}
                onClick = {props.clicked} > Switch Name </button>
        </div>
        
    );
}
export default cockpit;