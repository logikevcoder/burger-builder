import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

// base prices
const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.6,
  meat: 1.50,
  bacon: 1.50
}

class BurgerBuilder extends Component {
  state = {
    ingredients : { // initial state of ingredients set to 0
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchaseable: false,
    purchasing: false,
  }

  updatePurchaseState(ingredients) {
    //sum up all values by turning object above into an array
    const sum = Object.keys(ingredients) // creates array of string entries 'salad', 'bacon'
      .map(igKey => { 
        return ingredients[igKey] // return new value to replace the old value, returning the value of a numerical key
      })
      .reduce((sum, el) => { // get the sum of the array. Iterate over each element with a function that gets the new sum and individual element
        return sum + el; // adding current sum plus the element number representing an ingredient
      }, 0); // starting element of 0
    this.setState({purchaseable: sum > 0}); // either true or false based on if there's at least 1 ingredient
  }
  
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    alert('you continue');
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients // copied the ingredients object above
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients}
            purchaseContinued={this.purchaseContinueHandler}
            purchaseCancelled={this.purchaseContHandler} />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          price={this.state.totalPrice}
          order={this.purchaseHandler} />
      </Aux>
    )
  }
}

export default BurgerBuilder;