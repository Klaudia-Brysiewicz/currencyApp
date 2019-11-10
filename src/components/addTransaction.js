import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const AddTransaction = ({ addTransaction }) => {
    const [description, setDescription] = useState('');
    const [transactionValue, setTransactionValue] = useState('');
    return (
        <Card>
            <CardContent>
                <Typography>Opis :</Typography>
                <Input value={description} onChange={(event) => setDescription(event.target.value)} type="text" />
                <Typography>Kwota :</Typography>
                <Input value={transactionValue} onChange={(event) => setTransactionValue(event.target.value)} type="number" />
                <Button color="primary" onClick={() => addTransaction(description, transactionValue)}>
                    Dodaj
                </Button>
            </CardContent>
        </Card>
    )
}

export default AddTransaction;
