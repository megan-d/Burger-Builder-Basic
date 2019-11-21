import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

//Using parenthese allows for implicit return
class Modal extends Component {
    //control updating of order summary by changing how modal updates. only want to update if show changes or order placed (children updated).
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    // componentDidUpdate () {
    //     console.log('[Modal] DidUpdate')
    // }
    
    render() {
        return(
            //change modal depending on the show property (whether it should be shown or not)
            <React.Fragment>
            <Backdrop 
                show={this.props.show} 
                clicked={this.props.modalClosed}/>
            <div 
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
             {/* props.children can be anything */}
                {this.props.children}
            </div>
            </React.Fragment>
        )
    }
};

export default Modal;