import {
    getGreatestValueTransaction,
    getSummary,
    changeCurrency,
    getValueAfterExchange,
} from '../utils/helpers';
import { ExchangeState, Action, ExchangeActionTypes } from './types';

const initialState: ExchangeState = {
    exchangeRate: '4.2',
    transactions: [],
    summary: 0,
    greatestTransaction: null,
};

export const exchange = (state = initialState, action: Action): ExchangeState => {
    switch (action.type) {
        case ExchangeActionTypes.CHANGE_RATE:
            const transactionsAfterRateChange = changeCurrency(
                state.transactions,
                action.data,
                getValueAfterExchange,
            );
            const summaryAfterRateChange: number = getSummary(
                transactionsAfterRateChange,
                'valueAfterExchange',
            );
            const greatestValueAfterRateChange = getGreatestValueTransaction(
                transactionsAfterRateChange,
            );
            return {
                ...state,
                exchangeRate: action.data,
                transactions: transactionsAfterRateChange,
                summaryAfterExchange: summaryAfterRateChange,
                greatestTransaction: greatestValueAfterRateChange,
            };
        case ExchangeActionTypes.ADD_TRANSACTION:
            const updatedTransactions = [...state.transactions, action.data];
            const updatedSummary = getSummary(updatedTransactions, 'transactionValue');
            const updatedSummaryAfterExchange = getSummary(
                updatedTransactions,
                'valueAfterExchange',
            );
            const updatedGreatestValue = getGreatestValueTransaction(updatedTransactions);
            return {
                ...state,
                summary: updatedSummary,
                summaryAfterExchange: updatedSummaryAfterExchange,
                transactions: updatedTransactions,
                greatestTransaction: updatedGreatestValue,
            };
        case ExchangeActionTypes.REMOVE_TRANSACTION:
            const filtredTransactions = state.transactions.filter(el => el.id !== action.id);
            const newSummary = getSummary(filtredTransactions, 'transactionValue');
            const newSummaryAfterExchange = getSummary(filtredTransactions, 'valueAfterExchange');
            const newGreatestValue = getGreatestValueTransaction(filtredTransactions);
            return {
                ...state,
                transactions: filtredTransactions,
                summary: newSummary,
                summaryAfterExchange: newSummaryAfterExchange,
                greatestTransaction: newGreatestValue,
            };
        default:
            return state;
    }
};
