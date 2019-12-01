import { Transaction } from '../reducers/types';

const getValueAfterExchange = (
    exchangeRate: string | number,
    transactionValue: string | number,
): string => {
    const value = Number(exchangeRate) * Number(transactionValue);
    const pointIndex = String(value).indexOf('.');
    const isFloatNumber = pointIndex !== -1 ? true : false;
    if (isFloatNumber) {
        const updatedValue = String(value).slice(0, pointIndex + 3);
        if (updatedValue.slice(pointIndex).length === 2) {
            return `${updatedValue}0`;
        }
        return updatedValue;
    }
    return `${value}.00`;
};

const getGreatestValueTransaction = (values: Transaction[]): Transaction => {
    const allValues = values.sort((a, b) => b.transactionValue - a.transactionValue);
    return allValues[0];
};

const getSummary = (transactions: Transaction[], key: string): number =>
    transactions.reduce((accu, el: Transaction) => {
        return accu + Number(el[key]);
    }, 0);

const changeCurrency = (
    transactions: Transaction[],
    exchangeRate: string,
    getValueAfterExchangeFunc: (exchangeRate: string, transactionValue: number) => string,
): Transaction[] =>
    transactions.map(el => ({
        ...el,
        valueAfterExchange: getValueAfterExchangeFunc(exchangeRate, el.transactionValue),
    }));

export { getValueAfterExchange, getGreatestValueTransaction, getSummary, changeCurrency };
