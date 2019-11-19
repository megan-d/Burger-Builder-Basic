import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

//Using parenthese allows for implicit return
const modal = (props) => (
    //change modal depending on the show property (whether it should be shown or not)
    <React.Fragment>
        <Backdrop 
            show={props.show} 
            clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {/* props.children can be anything */}
            {props.children}
        </div>
    </React.Fragment>
);

export default modal;