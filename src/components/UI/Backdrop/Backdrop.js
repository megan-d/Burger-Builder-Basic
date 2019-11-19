import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => (
    //if props.show is true, display empty div with Backdrop class. If return null, means nothing gets rendered
    props.show ? <div 
        className={classes.Backdrop}
        onClick={props.clicked}></div> : null
);

export default backdrop;