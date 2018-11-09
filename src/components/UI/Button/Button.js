import React from 'react';
import classes from './Button.css';

const button = (props) => (
  // set a defined class of Button and a second class with the option to change it for each button component
  <button 
    className={[classes.Button, classes[props.btnType]].join(' ')} // array of strings
    onClick={props.clicked}>{props.children}
  </button>
)

export default button;