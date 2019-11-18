import React from 'react';


const orderSummary = (props) => {
    //Display title, list of all items in order, price, question about continue to checkout
    //ingredients will be in object rather than array. Want to make an li for each item (e.g., <li>Salad: 1</li>)
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            //use span because want to capitalize
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </React.Fragment>
    )
    
};

export default orderSummary;