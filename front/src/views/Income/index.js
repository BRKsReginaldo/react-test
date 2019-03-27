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
});

function Income({classes}) {
    const [income, setIncome] = useState([]);

    useMounted(() => {
        fetch(`${API_URL}/income`)
            .then(response => response.json())
            .then(income => setIncome(income))
    });

    return (
        <Paper className={classes.root}>
            <Button variant="raised" color="primary" style={{margin: '20px 10px'}}>Add Income</Button>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Paid At</TableCell>
                        <TableCell>Paid By</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {income.map(incomeData => (
                        <TableRow key={incomeData.id}>
                            <TableCell>
                                {incomeData.id}
                            </TableCell>
                            <TableCell>
                                {incomeData.value}
                            </TableCell>
                            <TableCell>
                                {incomeData.paid_at}
                            </TableCell>
                            <TableCell>
                                {incomeData.paid_by}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default withStyles(styles)(Income)