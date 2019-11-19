import React from 'react';
// import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
    <React.Fragment>
        {/* //Will replace below div with separate components */}
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {/* Output component we wrap with this layout */}
            {props.children}
        </main>
    </React.Fragment>
);


export default Layout;