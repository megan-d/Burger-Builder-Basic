import React, { Component } from 'react';
// import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    // implememnt method now that is class component to handle closing sidedrawer
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    
    //method to handle toggling state showSideDrawert when hamburger icon in toolbar is clicked. Make sure to use this prevState way since setting state that depends on old state.
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
    });
}
    
    render() {
        return (
            <React.Fragment>
                {/* //Will replace below div with separate components */}
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {/* Output component we wrap with this layout */}
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}
    
export default Layout;