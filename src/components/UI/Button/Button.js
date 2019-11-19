import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button
    //pass in array of classes, including dynamic based on information get from props (Danger or Success). then join it to make it a string.
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;