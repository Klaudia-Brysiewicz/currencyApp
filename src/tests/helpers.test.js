import { getValueAfterExchange, getGreatestValueTransaction, getSummary } from '../utils/helpers';

const transactions = [
    {
        description: 'credit',
        transactionValue: '23',
    },
    {
        description: 'holidays',
        transactionValue: '44',
    },
];

describe('test helpers functions', () => {
    it('getValueAfterExchange gives value in Euro', () => {
        const result = getValueAfterExchange(4.2, 234);
        expect(result).toBe("982.80");
    });
    it('getGreatestValueTransaction gives greatest transaction', () => {
        const expectedResult = {
            description: 'holidays',
            transactionValue: '44',
        };
        const result = getGreatestValueTransaction(transactions);
        expect(result).toEqual(expectedResult);
    });
    it('getSummary gives summary', () => {
        const result = getSummary(transactions, 'transactionValue');
        expect(result).toBe(67);
    });
});
