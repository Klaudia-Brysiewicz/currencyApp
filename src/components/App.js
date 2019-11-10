import React from 'react';
import Grid from '@material-ui/core/Grid';
import CurrencyConverter from './currencyConverter';

const App = () => {
    return (
        <Grid container className="App">
            <Grid>
                <CurrencyConverter />
            </Grid>
        </Grid>
    );
};

export default App;
