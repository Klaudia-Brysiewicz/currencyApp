import React, { useState, Fragment, CSSProperties } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Typography, CardContent, Input } from '@material-ui/core';
import { ExchangeActionTypes } from '../reducers/types';
import { getValueAfterExchange } from '../utils/helpers';
import { RootState, EventType } from '../reducers/types';

const CurrencyConverter: React.FC = () => {
    const [value, setVaule] = useState('1');
    const [euroValue, setEuroValue] = useState('');
    const exchangeRate = useSelector((state: RootState) => state.exchange.exchangeRate);
    const dispatch = useDispatch();
    const calculateValue = (event: EventType) => {
        const newValue = event.target.value;
        setVaule(newValue);
        const valueAfterExchange = getValueAfterExchange(exchangeRate, newValue);
        setEuroValue(valueAfterExchange);
    };
    const calculateExchangeRate = (event: any) => {
        const newExchangeRate = event.target.value;
        dispatch({ type: ExchangeActionTypes.CHANGE_RATE, data: newExchangeRate });
        const valueAfterExchange = getValueAfterExchange(newExchangeRate, value);
        setEuroValue(valueAfterExchange);
    };
    return (
        <Card style={styles.container}>
            <CardContent>
                <Typography>Kurs € :</Typography>
                <Input value={exchangeRate} onChange={calculateExchangeRate} type="number" />
                {exchangeRate ? (
                    <Fragment>
                        <Typography>Kwota w PLN:</Typography>
                        <Input value={value} onChange={calculateValue} type="number" />
                    </Fragment>
                ) : null}
                {value && exchangeRate && euroValue ? (
                    <Typography>
                        {value} PLN = {euroValue} €
                    </Typography>
                ) : null}
            </CardContent>
        </Card>
    );
};

const styles: Record<string, CSSProperties> = {
    container: {
        marginBottom: '40px',
    },
};

export default CurrencyConverter;
