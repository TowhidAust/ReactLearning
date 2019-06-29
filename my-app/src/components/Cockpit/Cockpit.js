import React from 'react';
import css_classes from './Cockpit.css';
const cockpit=(props)=>{

    let classes = [];
    let btnclass = '';
    if(props.showPersons){
        btnclass = css_classes.Red;
    }
    if(props.persons.length<=2){
      classes.push(css_classes.red);
    }
    if(props.persons.length<=1){
      classes.push(css_classes.bold)
    }

    return (
        <div className = {css_classes.Cockpit}>
            <h1>This is my first React App</h1>
            <p className={classes.join(' ')}>This is really working</p>

            <button
            className={btnclass}
            onClick={props.clicked}> SwitchName</button>
        </div>  
    );
}

export default cockpit;