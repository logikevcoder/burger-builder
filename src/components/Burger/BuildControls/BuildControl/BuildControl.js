import React from 'react'
import classes from './BuildControl.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.IngredientLabel} >{props.ingredientLabel}</div>
    <button className={classes.More}>Less</button>
    <button className={classes.Less} onClick={props.added}>More</button>
  </div>
);

export default buildControl;