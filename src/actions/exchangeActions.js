import { CHANGE_RATE, ADD_TRANSACTION } from './types';

const changeExchangeRate = value => ({
    type: CHANGE_RATE,
    data: value,
});

const addTransaction = value => ({
    type: ADD_TRANSACTION,
    data: value,
});

export {
    changeExchangeRate,
    addTransaction,
};
