import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import withStyles from "@material-ui/core/styles/withStyles";
import {DashboardRoutes} from "../../routes";
import {Link} from "react-router-dom";
import useGlobalUser from "../../store/user";
import useMounted from "../../hooks/useMounted";
import {API_URL} from "../../constants";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
});

const Layout = ({children, classes}) => {
    const [user, setUser] = useGlobalUser()

    useMounted(() => {
        let match = window.location.search.match(/id=(\d)/);
        fetch(`${API_URL}/user?id=${match ? match[1] : 1}`)
            .then(response => response.json())
            .then(user => setUser(user))
    })

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        style={{
                            flexGrow: 1
                        }}>
                        Super Awesome Admin
                    </Typography>
                    <Typography variant="h6" color="inherit" noWrap>
                        Welcome {user && user.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper
                }}
                variant="permanent">
                <div className={classes.toolbar}/>
                <List>
                    {DashboardRoutes.map(route => (
                        <ListItem
                            key={route.path}
                            button
                            component={(props) => <Link to={route.path} {...props}/>}>
                            <ListItemText primary={route.name}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    )
}

export default withStyles(styles)(Layout);