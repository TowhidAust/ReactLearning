import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props)=>{

    const customStyles = {
        '@media (max-width: 992px)': {
            width:'90%',
            backgroundColor: 'black',
            color: 'white'

        }
    }
    return (
        <div className="Person" style={customStyles}> 
            <p onClick={props.click} >I'm {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);