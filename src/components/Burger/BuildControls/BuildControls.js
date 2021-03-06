import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

//create array to loop through build controls
const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: $<strong>{props.price.toFixed(2)}</strong></p>
        {/* map over each element in controls array to create BuildControl component for it */}
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                // pass down the disabled status for the given type
                disabled={props.disabled[ctrl.type]}
                />
        ))}
        <button className={classes.OrderButton}
                disabled={props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;