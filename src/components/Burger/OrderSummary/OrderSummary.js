import React, { Component }from 'react';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    // componentDidUpdate() {
        //don't need to re-render order summary if we're not displaying it
        //This could be a functional component. Doesn't have to be a class. Just changed to class to test with this lifecycle hook.
    //     console.log('[OrderSummary] DidUpdate')
    // }
    
    render() {
        //Display title, list of all items in order, price, question about continue to checkout
    //ingredients will be in object rather than array. Want to make an li for each item (e.g., <li>Salad: 1</li>)
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
        //use span because want to capitalize
    return (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>);
    });

        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </React.Fragment>
        );
    }
};

export default OrderSummary;