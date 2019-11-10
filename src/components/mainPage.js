import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CurrencyConverter from './currencyConverter';
import AddTransaction from './addTransaction';
import TransactionList from './transactionList';

const MainPage = () => {
    return (
        <Grid container style={styles.container} className="App">
            <Grid item xs={12}>
                <Typography variant="h4" style={styles.title}>Przelicznik walutowy</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <CurrencyConverter style={styles.marginBottom} />
                <AddTransaction/>
            </Grid>
            <Grid item xs={12}>
                <TransactionList />
            </Grid>
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
