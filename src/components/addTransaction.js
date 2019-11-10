import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { ADD_TRANSACTION } from '../actions/types';
import { useDispatch, useSelector } from 'react-redux';
import { getValueAfterExchange } from '../utils/helpers';

const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [transactionValue, setTransactionValue] = useState('');
    const [message, setMessage] = useState('');
    const exchangeRate = useSelector(state => state.exchange.exchangeRate);
    const dispatch = useDispatch();
    return (
        <Card style={styles.container}>
            <CardContent style={styles.content}>
                <Typography>Dodaj transakcję :</Typography>
                <Typography>Opis :</Typography>
                <Input
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    type="text"
                />
                <Typography>kwota w euro :</Typography>
                <Input
                    value={transactionValue}
                    onChange={event => setTransactionValue(event.target.value)}
                    type="number"
                />
                { message ? (
                    <Typography style={styles.error}>{message}</Typography>
                ) : null}
                <Button
                    color="primary"
                    onClick={() => {
                        if(!description || !transactionValue) {
                            return setMessage('Proszę uzupełnić wszystkie pola');
                        }
                        dispatch({
                            type: ADD_TRANSACTION,
                            data: {
                                description,
                                transactionValue,
                                id: Date.now(),
                                valueAfterExchange: getValueAfterExchange(exchangeRate, transactionValue),
                            },
                        });
                        setDescription('');
                        setTransactionValue('');
                    }}
                >
                    Dodaj
                </Button>
            </CardContent>
        </Card>
    );
};

const styles = {
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
