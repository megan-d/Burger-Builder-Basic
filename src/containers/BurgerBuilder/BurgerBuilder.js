import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import Aux from '../../hoc/Aux/Aux';


//map of which ingredient costs what
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false
        }
    }

    //create updatePurchaseState method to be run at end of addIngredientHandler and RemoveIngredientHandler to check whether we should turn purchasable to true or false
    updatePurchaseState (ingredients) {
        //get ingredients from argument, which will be passed in as updated ingredients from addIngredientHandler and removeIngredientHandler
        //turn into array to sum
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        //set state to true or false
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        //create new object so state can be updated in an immutable way
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice, 
            ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        //if there isn't any of a certain ingredient, want to return (and below will disable button in render method)
        if(oldCount <= 0) {
            return;
        } 
        const updatedCount = oldCount - 1;
        //create new object so state can be updated in an immutable way
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice, 
            ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    //Triggered whenever we click order now button
    purchaseHandler = () => {
        //need to use this syntax since method is triggered through an event
        this.setState({purchasing: true});
    }

    //when click backdrop or press cancel button, cancel the purchase
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    //method to run when press continue button in OrderSummary
    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render() {
        //create copy of state for disabled button functionality
        const disabledInfo = {
            ...this.state.ingredients
        };
        //loop through all keys in disabledInfo and check if 0 or less and update the disabledInfo[key] with that information from that check
        for (let key in disabledInfo) {
            //this check will return true or false
            //e.g., {salad: true, meat: false}
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // Return JSX code
        return (
            <React.Fragment>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled= {this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={!this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
