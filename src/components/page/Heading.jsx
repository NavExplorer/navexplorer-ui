import {Divider, withStyles} from "@material-ui/core";
import React from "react";

const styles = () => ({
    h1: {
        fontFamily: "'Raleway', sans-serif",
        fontSize: "2.1875rem",
        margin: 0,
        padding: 0,
        fontWeight: 400,
    },
});

function Heading(props) {
    const {classes, title, subtitle} = props

    return (
        <div>
            <h1 className={classes.h1}>{title}</h1>
            <Divider/>
            {subtitle && <h2>{subtitle}</h2>}
        </div>
    )
}

export default withStyles(styles)(Heading);