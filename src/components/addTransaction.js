import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { ADD_TRANSACTION } from '../actions/types';
import { useDispatch } from 'react-redux';

const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [transactionValue, setTransactionValue] = useState('');
    const dispatch = useDispatch();
    return (
        <Card style={styles.container}>
            <CardContent>
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
                <Button
                    color="primary"
                    onClick={() => {
                        dispatch({ type: ADD_TRANSACTION, data: { description, transactionValue, id: Date.now() } });
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
};

export default AddTransaction;
