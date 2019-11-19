import React from 'react';
import classes from './DrawerToggle.module.css';
import SideDrawer from '../SideDrawer';

const drawerToggle = (props) => (
  //display a hamburger toggle icon within the toolbar component. When click on that icon, sidedrawer is shown. Will need to somehow get to layout component and adjust state so showsidedrawer is true.
  <React.Fragment>
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <SideDrawer />
  </React.Fragment>
  
);

export default drawerToggle;