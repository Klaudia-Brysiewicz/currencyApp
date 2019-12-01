import React, { CSSProperties, SyntheticEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Card, Grid, Fab, Typography, CardContent, Theme } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ExchangeActionTypes } from '../reducers/types';
import { Transaction } from '../reducers/types';
import { RootState } from '../reducers/types';

const useStyles = makeStyles((theme: Theme) => ({
    fab: {
        width: 35,
        height: 35,
    },
}));

interface TransactionListProps {
    transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const summary = useSelector((state: RootState) => state.exchange.summary);
    const summaryAfterExchange = useSelector(
        (state: RootState) => state.exchange.summaryAfterExchange,
    );
    const handleClickAdd = (event: SyntheticEvent, id: number) =>
        dispatch({ type: ExchangeActionTypes.REMOVE_TRANSACTION, id });
    return (
        <Card style={styles.container}>
            <CardContent>
                {transactions.map(
                    (
                        { description, transactionValue, id, valueAfterExchange }: Transaction,
                        index: number,
                    ) => (
                        <Grid
                            container
                            key={index}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={index ? { ...styles.item, ...styles.borderTop } : styles.item}
                        >
                            <Typography>
                                {description}, €: {transactionValue}, PLN: {valueAfterExchange}
                            </Typography>
                            <Fab
                                color="primary"
                                className={classes.fab}
                                onClick={(event: SyntheticEvent) => handleClickAdd(event, id)}
                            >
                                -
                            </Fab>
                        </Grid>
                    ),
                )}
            </CardContent>
            <CardContent>
                <Typography> Wszystkie transakcje: {summary}</Typography>
                <Typography>
                    Wszystkie transakcje po zmianie waluty: {summaryAfterExchange}
                </Typography>
            </CardContent>
        </Card>
    );
};

const styles: Record<string, CSSProperties> = {
    container: {
        marginBottom: '40px',
    },
    item: {
        padding: 10,
        margin: '10px 0',
    },
    borderTop: {
        borderTop: '1px solid gray',
    },
};

export default TransactionList;
