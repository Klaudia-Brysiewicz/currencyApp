import { CHANGE_RATE, ADD_TRANSACTION, REMOVE_TRANSACTION } from '../actions/types';

const initialState = {
    exchangeRate: 4.2,
    transactions: [],
    summary: 0,
};

export const exchange = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_RATE:
            return { ...state, exchangeRate: action.data };
        case ADD_TRANSACTION:
            const updatedTransactions = [...state.transactions, action.data];
            const updatedSummary = updatedTransactions.reduce((accu, { transactionValue }) => {
                return accu + Number(transactionValue);
            }, 0);
            const updatedSummaryAfterExchange = updatedTransactions.reduce((accu, { valueAfterExchange }) => {
                return accu + Number(valueAfterExchange);
            }, 0);
            return {
                ...state,
                summary: updatedSummary,
                summaryAfterExchange: updatedSummaryAfterExchange,
                transactions: updatedTransactions,
            };
        case REMOVE_TRANSACTION:
            const filtredTransactions = state.transactions.filter(el => el.id !== action.id);
            const newSummary = filtredTransactions.reduce((accu, { transactionValue }) => {
                return accu + Number(transactionValue);
            }, 0);
            const newSummaryAfterExchange = filtredTransactions.reduce((accu, { valueAfterExchange }) => {
                return accu + Number(valueAfterExchange);
            }, 0);
            return { ...state, transactions: filtredTransactions, summary: newSummary, summaryAfterExchange: newSummaryAfterExchange };
        default:
            return state;
    }
};
