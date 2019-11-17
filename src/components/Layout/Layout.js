import React from 'react';
// import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const Layout = (props) => (
    <React.Fragment>
        {/* //Will replace below div with separate components */}
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {/* Output component we wrap with this layout */}
            {props.children}
        </main>
    </React.Fragment>
);


export default Layout;