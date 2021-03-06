import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';


const burger = (props) => {
    //transform ingredients object prop into array of the values of the ingredients (properties)
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            //array as many times as there are number of that ingredients in state to give us length
            return [...Array(props.ingredients[igKey])]
            .map((_, i) => {
                //map object into array of ingredients. the length now allows us to display that ingredient the number of times specified in state.
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        //flatten array and create one array
        .reduce((arr, el) => {
            //take given element which we're looping and add it to array
            return arr.concat(el);
        }, []);
        //if this new array length is 0 (empty), then display message to add ingredients
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;