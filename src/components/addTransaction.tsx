import React, { useState, CSSProperties } from 'react';
import { Typography, CardContent, Input, Button, Card } from '@material-ui/core';
import { ExchangeActionTypes, RootState } from '../reducers/types';
import { useDispatch, useSelector } from 'react-redux';
import { getValueAfterExchange } from '../utils/helpers';

const AddTransaction: React.FC = () => {
    const [description, setDescription] = useState('');
    const [transactionValue, setTransactionValue] = useState('');
    const [message, setMessage] = useState('');
    const exchangeRate: string = useSelector((state: RootState) => state.exchange.exchangeRate);
    const dispatch = useDispatch();
    const handleClick = () => {
        if (!description || !transactionValue) {
            return setMessage('Proszę uzupełnić wszystkie pola');
        }
        dispatch({
            type: ExchangeActionTypes.ADD_TRANSACTION,
            data: {
                description,
                transactionValue,
                id: Date.now(),
                valueAfterExchange: getValueAfterExchange(exchangeRate, transactionValue),
            },
        });
        setMessage('');
        setDescription('');
        setTransactionValue('');
    };
    const handleDescriptionChange = (event: any) => setDescription(event.target.value);
    const handleTransactionChange = (event: any) => setTransactionValue(event.target.value);
    return (
        <Card style={styles.container}>
            <CardContent style={styles.content}>
                <Typography>Dodaj transakcję :</Typography>
                <Typography>Opis :</Typography>
                <Input value={description} onChange={handleDescriptionChange} type="text" />
                <Typography>kwota w euro :</Typography>
                <Input value={transactionValue} onChange={handleTransactionChange} type="number" />
                {message ? <Typography style={styles.error}>{message}</Typography> : null}
                <Button color="primary" onClick={handleClick}>
                    Dodaj
                </Button>
            </CardContent>
        </Card>
    );
};

const styles: Record<string, CSSProperties> = {
    container: {
        marginBottom: '40px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    error: {
        color: 'red',
    },
};

export default AddTransaction;
