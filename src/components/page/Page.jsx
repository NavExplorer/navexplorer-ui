import React from "react";
import Heading from "./Heading";
import StatusBar from "./StatusBar";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    root: {
        marginBottom: theme.spacing.unit * 3,
    },
});

function Page(props) {
    const {classes, alert, children, title, subtitle} = props;

    return (
        <div className={classes.root}>
            <Heading title={title} subtitle={subtitle} />
            {alert.message && <StatusBar variant={alert.type} text={alert.message} />}
            {children}
        </div>
    )
}

const mapStateToProps = state => ({
    alert: state.alert,
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Page)));

