import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { observer } from 'mobx-react';
import { createStyles } from '@material-ui/core';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    /*Use config from console*/
};

firebase.initializeApp(config);

const styles: any = theme => createStyles({
    root: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        minHeight: "100%",
    },    
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        position: "fixed"
    },
    drawerPaper: {
        position: 'relative',
        width: 240,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: "2%",
        overflow: "auto",
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
    row: {
        flex: 0,
    }
});

const MainComponent = observer((props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" >
                        App Title
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
                <div className={classes.toolbar} />
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div>
    );
});

export const Main = withStyles(styles)(MainComponent);