import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CurrencyConverter from './currencyConverter';
import AddTransaction from './addTransaction';
import TransactionList from './transactionList';
import MaxValueCard from './maxValueCard';
import { useSelector } from 'react-redux';

const MainPage = () => {
    const transactions = useSelector(state => state.exchange.transactions);
    return (
        <Grid container style={styles.container} className="App">
            <Grid item xs={12}>
                <Typography variant="h4" style={styles.title}>Przelicznik walutowy</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <CurrencyConverter style={styles.marginBottom} />
                <AddTransaction/>
            </Grid>
            {(transactions.length)
            ? (
                <Grid container direction="row" justify="space-between">
                    <Grid item xs={12} md={7}>
                        <TransactionList transactions={transactions} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <MaxValueCard />
                    </Grid>
                </Grid>
            ) : null}
        </Grid>
    );
};

const styles = {
    title: {
        color: 'white',
        marginBottom: 20,
    },
    container: {
        padding: '40px',
        backgroundColor: '#45434a',
    },
}
export default MainPage;
