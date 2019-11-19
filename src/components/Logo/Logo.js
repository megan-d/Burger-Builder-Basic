import React from 'react';
//import img into file so webpack is aware we are using image
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        {/* set img src dynamically because of how build setup is with webpack. import image into file. */}
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;