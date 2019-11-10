import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CurrencyConverter from './currencyConverter';

const App = () => {
    return (
        <Grid container style={styles.container} className="App">
            <Grid item xs={12}>
                <Typography variant="h4">Przelicznik walutowy</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <CurrencyConverter />
            </Grid>
        </Grid>
    );
};

const styles = {
    container: {
        margin: '40px',
    },
}
export default App;
