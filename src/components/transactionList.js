import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { getValueInEuro } from '../utils/helpers';
import { useDispatch } from 'react-redux';
import { REMOVE_TRANSACTION } from '../actions/types';

const useStyles = makeStyles(theme => ({
    fab: {
        width: 35,
        height: 35,
    },
}));

const TransactionList = () => {
    const classes = useStyles();
    const transactions = useSelector(state => state.exchange.transactions);
    const exchangeRate = useSelector(state => state.exchange.exchangeRate);
    const dispatch = useDispatch();
    if (!transactions.length) return null;
    return (
        <Card>
            <CardContent>
                {transactions.map(({ description, transactionValue, id }, index) => (
                    <Grid
                        container
                        key={index}
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        style={index ? { ...styles.item, ...styles.borderTop } : styles.item }
                    >
                        <Typography>
                            {description}, €: {transactionValue}, PLN:{' '}
                            {getValueInEuro(exchangeRate, transactionValue)}
                        </Typography>
                        <Fab
                            color="primary"
                            className={classes.fab}
                            onClick={() => dispatch({ type: REMOVE_TRANSACTION, id: id })}
                        >
                            -
                        </Fab>
                    </Grid>
                ))}
            </CardContent>
        </Card>
    );
};

const styles = {
    item: {
        padding: 10,
        margin: '10px 0',
    },
    borderTop: {
        borderTop: '1px solid gray',
    },
};

export default TransactionList;
