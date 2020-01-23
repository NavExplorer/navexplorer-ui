import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter, Link} from 'react-router-dom'

import {withStyles} from '@material-ui/core/styles/index'
import CssBaseline from '@material-ui/core/CssBaseline/index'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton/index";
import MenuIcon from '@material-ui/icons/Menu';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import {routes as routeConfig, routes} from '../../config/routes';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        background: "linear-gradient(45deg, rgba(197, 41, 181, 1) 0%, rgba(68, 178, 233, 1) 100%)",
        zIndex: theme.zIndex.drawer + 1,
    },
    toolBar: {
        minHeight: "64px !important",
    },
    menuButton: {
        marginRight: theme.spacing.unit
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerListItem: {
        paddingLeft: theme.spacing.unit * 3,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
    icon: {
        color: "#5d3f8d",
        marginRight: "5px",
    },
});

class MainLayout extends Component {
    state = {};

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    closeDrawer = () => {
        this.setState( ({ mobileOpen: false }));
    };

    renderDrawer = (classes) => (
        <div>
            <Hidden smDown implementation="css">
                <div className={classes.toolbar}/>
            </Hidden>
            <List>
                {Object.keys(routeConfig).map(key => (
                    <ListItem className={classes.drawerListItem} disableGutters button component={Link} to={routes[key].path} onClick={this.closeDrawer}>
                        {/*<div className={classes.icon}>{routes[key].icon}</div>*/}
                        <ListItemText primary={routes[key].name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    render() {
        const {classes, children} = this.props;
        const {mobileOpen} = this.state;
        const renderDrawer = this.renderDrawer(classes)

        return (<div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Hidden mdUp implementation="css" className={classes.menuButton}>
                        <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                    <Grid justify="space-between" container spacing={24}>
                        <Grid item>
                            <Typography variant="h6" color="inherit" noWrap justifycontent="flex-start">
                                NavExplorer
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Hidden smUp implementation="css">
                <Drawer variant="temporary" anchor="left" open={mobileOpen} onClose={this.handleDrawerToggle} classes={{paper: classes.drawerPaper}}>
                    {renderDrawer}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
                    {renderDrawer}
                </Drawer>
            </Hidden>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>);
    }
}


const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(MainLayout)));
