import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    //Play open and close animation when slides in and out
    return(
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;