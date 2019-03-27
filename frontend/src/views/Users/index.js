import React, {useState} from 'react'
import useMounted from "../../hooks/useMounted";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {API_URL} from "../../constants";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 700
    }
})

function Users({classes}) {
    const [users, setUsers] = useState([])

    useMounted(() => {
        fetch(`${API_URL}/users`)
            .then(response => response.json())
            .then(users => setUsers(users))
    })

    return (
        <Paper className={classes.root}>
            <Button variant="raised" color="primary" style={{margin: '20px 10px'}}>Add User</Button>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Photo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>
                                {user.id}
                            </TableCell>
                            <TableCell>
                                {user.name}
                            </TableCell>
                            <TableCell>
                                {user.email}
                            </TableCell>
                            <TableCell>
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    backgroundImage: `url(${user.photo})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center'
                                }}></div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default withStyles(styles)(Users)