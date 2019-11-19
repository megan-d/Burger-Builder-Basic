import React, { Component } from 'react';
// import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    // implememnt method now that is class component to handle closing sidedrawer
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    
    render() {
        return (
            <React.Fragment>
                {/* //Will replace below div with separate components */}
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {/* Output component we wrap with this layout */}
                    {this.props.children}
                </main>
            </React.Fragment>
        )
        
    }
    
}
    



export default Layout;