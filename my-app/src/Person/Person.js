import React from 'react'


const person = (props) =>{
    return (
        <div>
            <p>I am {props.name} and i am {props.age} Years Old </p>
            <p>{props.children}</p>
        </div>
        
    )
}

export default person;


