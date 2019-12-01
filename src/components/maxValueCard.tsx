import React, { CSSProperties } from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/types';

const MaxValueCard: React.FC = () => {
    const greatestTransaction = useSelector(
        (state: RootState) => state.exchange.greatestTransaction,
    );
    return (
        <Card style={styles.container}>
            <CardContent>
                <Typography>Największa transakcja :</Typography>
                <Typography>
                    opis: {greatestTransaction && greatestTransaction.description}
                </Typography>
                <Typography>
                    kwota: {greatestTransaction && greatestTransaction.transactionValue}
                </Typography>
                <Typography>
                    kwota po zmianie waluty:{' '}
                    {greatestTransaction && greatestTransaction.valueAfterExchange}
                </Typography>
            </CardContent>
        </Card>
    );
};

const styles: Record<string, CSSProperties> = {
    container: {
        marginBottom: '40px',
    },
};

export default MaxValueCard;
