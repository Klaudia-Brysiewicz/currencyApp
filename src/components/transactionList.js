import React from 'react'
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const TransactionList = () => {
    const transactions = useSelector(state => state.exchange.transactions);
    if (!transactions.length) return null;
    return (
        <Card>
            <CardContent>
                {transactions.map(({description, transactionValue}, index) => (
                    <Typography key={index} style={index ? styles.borderTop : {}}>{description}, {transactionValue}</Typography>
                ))}
            </CardContent>
        </Card>
    )
};

const styles = {
    borderTop: {
        borderTop: '1px solid gray',
        marginTop: 15,
        paddingTop: 15,
    },
};

export default TransactionList;