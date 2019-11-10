const getValueAfterExchange = (exchangeRate, transactionValue) => {
    const value = exchangeRate * transactionValue;
    const pointIndex = String(value).indexOf('.');
    const isFloatNumber = pointIndex !== -1 ? true : false;
    if (isFloatNumber) {
        const updatedValue = String(value).slice(0,pointIndex + 3);
        return updatedValue;
    }
    return value;
};

const getGreatestValueTransaction = (values) => {
    const allValues = values.sort((a, b) => b.transactionValue - a.transactionValue);
    return allValues[0];
};

export {
    getValueAfterExchange,
    getGreatestValueTransaction,
}