export const getValueAfterExchange = (exchangeRate, transactionValue) => {
    const value = exchangeRate * transactionValue;
    const pointIndex = String(value).indexOf('.');
    const isFloatNumber = pointIndex !== -1 ? true : false;
    if (isFloatNumber) {
        const updatedValue = String(value).slice(0,pointIndex + 3);
        return updatedValue;
    }
    return value;
};