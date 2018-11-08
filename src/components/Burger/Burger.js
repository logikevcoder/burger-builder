import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  // uses the js Object.keys to transform the object into an array, then use map on the new array
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => { // Array with 2 elements
        return <BurgerIngredient key={igKey + i} type={igKey} /> // create unique key for each item based on its index 
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0 ) {
      transformedIngredients = <p>Please start adding ingredients</p>
    }
    console.log(transformedIngredients);
 return (
   <div className={classes.Burger}>
    <BurgerIngredient type='bread-top'/>
    {transformedIngredients}
    <BurgerIngredient type='bread-bottom'/>
   </div>
 );
}

export default burger;