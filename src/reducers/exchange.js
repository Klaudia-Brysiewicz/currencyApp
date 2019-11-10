import { CHANGE_RATE, ADD_TRANSACTION, REMOVE_TRANSACTION } from '../actions/types';

const initialState = {
    exchangeRate: 4.2,
    transactions: [],
};

export const exchange = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_RATE:
            return { ...state, exchangeRate: action.data };
        case ADD_TRANSACTION:
            return { ...state, transactions: [ ...state.transactions, action.data] };
        case REMOVE_TRANSACTION:
        const updatedTransactions = state.transactions.filter(el => el.id !== action.id);
            return { ...state, transactions: updatedTransactions };
        default: 
            return state;
    }
}