import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import { CHANGE_RATE } from '../actions/types';
import { getValueAfterExchange } from '../utils/helpers';

const CurrencyConverter = () => {
    const [value, setVaule] = useState(1);
    const [euroValue, setEuroValue] = useState('');
    const exchangeRate = useSelector(state => state.exchange.exchangeRate);
    const dispatch = useDispatch();
    const calculateValue = (event) => {
        const value = event.target.value;
        setVaule(value);
        const valueAfterExchange = getValueAfterExchange(exchangeRate, value);
        setEuroValue(valueAfterExchange);
    };
    const calculateExchangeRate = (event) => {
        const exchangeRate = event.target.value;
        dispatch({ type: CHANGE_RATE, data: exchangeRate });
        const valueAfterExchange = getValueAfterExchange(exchangeRate, value);
        setEuroValue(valueAfterExchange);
    };
    return (
        <Card style={styles.container}>
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
                {(value && exchangeRate && euroValue)
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
};

export default CurrencyConverter;
