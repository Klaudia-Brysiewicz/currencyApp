import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useSelector } from 'react-redux';

const MaxValueCard = () => {
    const greatestTransaction = useSelector(state => state.exchange.greatestTransaction);
    return (
        <Card>
            <CardContent>
                <Typography>
                    Największa transakcja :
                </Typography>
                <Typography>
                    opis: {greatestTransaction.description}
                </Typography>
                <Typography>
                    kwota: {greatestTransaction.transactionValue}
                </Typography>
                <Typography>
                    kwota po zmianie waluty: {greatestTransaction.valueAfterExchange}
                </Typography>
            </CardContent>
        </Card>
    )
}


export default MaxValueCard;
