import React, { useState, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import { StylesContext } from '@material-ui/styles/StylesProvider';

const CurrencyConverter = ({ style }) => {
    const [value, setVaule] = useState(1);
    const [euroValue, setEuroValue] = useState('');
    const [exchangeRate, setExchangeRate] = useState('');
    const calculateValue = (event) => {
        const value = event.target.value;
        setVaule(value);
        setEuroValue(value * exchangeRate);
    };
    const calculateExchangeRate = (event) => {
        const exchangeRate = event.target.value;
        setExchangeRate(exchangeRate)
        setEuroValue(exchangeRate * value);
    };
    return (
        <Card style={styles.container} >
            <CardContent>
                <Typography>Kurs € :</Typography>
                <Input value={exchangeRate} onChange={(event) => calculateExchangeRate(event)} type="number" />
                { exchangeRate
                ? (
                    <Fragment>
                        <Typography>Kwota w PLN:</Typography>
                        <Input value={value} onChange={(event) => calculateValue(event)} type="number" />
                    </Fragment>
                ) : null}
                {(value && exchangeRate)
                ? (<Typography>{value} PLN = {euroValue} €</Typography>)
                : null}
            </CardContent>
        </Card>
    );
};

const styles = {
    container: {
        marginBottom: '40px',
    },
}

export default CurrencyConverter;
