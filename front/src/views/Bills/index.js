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

function Bills({classes}) {
    const [bills, setBills] = useState([])

    useMounted(() => {
        fetch(`${API_URL}/bills`)
            .then(response => response.json())
            .then(bills => setBills(bills))
    })

    return (
        <Paper className={classes.root}>
            <Button variant="raised" color="primary" style={{margin: '20px 10px'}}>Add Bill</Button>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Paid At</TableCell>
                        <TableCell>Paid To</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bills.map(bill => (
                        <TableRow key={bill.id}>
                            <TableCell>
                                {bill.id}
                            </TableCell>
                            <TableCell>
                                {bill.value}
                            </TableCell>
                            <TableCell>
                                {bill.paid_at}
                            </TableCell>
                            <TableCell>
                                {bill.paid_to}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default withStyles(styles)(Bills)