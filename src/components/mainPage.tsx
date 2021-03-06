import React, { CSSProperties } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CurrencyConverter from './currencyConverter';
import AddTransaction from './addTransaction';
import TransactionList from './transactionList';
import MaxValueCard from './maxValueCard';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/types';

const MainPage: React.FC = () => {
    const transactions = useSelector((state: RootState) => state.exchange.transactions);
    return (
        <Grid container style={styles.container} direction="column" justify="flex-start">
            <Grid item xs={12}>
                <Typography variant="h4" style={styles.title}>
                    Przelicznik walutowy
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <CurrencyConverter />
                <AddTransaction />
            </Grid>
            {transactions.length ? (
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

const styles: Record<string, CSSProperties> = {
    title: {
        color: 'white',
        marginBottom: 20,
    },
    container: {
        padding: '40px',
        backgroundColor: '#45434a',
        minHeight: '100vh',
    },
};
export default MainPage;
