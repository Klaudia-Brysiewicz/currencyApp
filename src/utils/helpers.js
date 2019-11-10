const getValueAfterExchange = (exchangeRate, transactionValue) => {
    const value = exchangeRate * transactionValue;
    const pointIndex = String(value).indexOf('.');
    const isFloatNumber = pointIndex !== -1 ? true : false;
    if (isFloatNumber) {
        const updatedValue = String(value).slice(0,pointIndex + 3);
        if (updatedValue.slice(pointIndex).length === 2) {
            return `${updatedValue}0`;
        }
        return updatedValue;
    }
    return `${value}.00`;
};

const getGreatestValueTransaction = (values) => {
    const allValues = values.sort((a, b) => b.transactionValue - a.transactionValue);
    return allValues[0];
};

const getSummary = (transactions, key) => (transactions.reduce(
    (accu, el) => {
        return accu + Number(el[key]);
    },
    0,
));

export {
    getValueAfterExchange,
    getGreatestValueTransaction,
    getSummary,
}