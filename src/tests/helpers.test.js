import { getValueAfterExchange, getGreatestValueTransaction } from '../utils/helpers';

describe('test helpers functions', () => {
    it('getValueAfterExchange gives value in Euro', () => {
        const result = getValueAfterExchange(4.2, 234);
        expect(result).toBe("982.80");
    });
    it('getGreatestValueTransaction gives greatest transaction', () => {
        const ttansactions = [
            {
                description: 'credit',
                transactionValue: '23',
            },
            {
                description: 'holidays',
                transactionValue: '44',
            },
        ];
        const expectedResult = {
            description: 'holidays',
            transactionValue: '44',
        };
        const result = getGreatestValueTransaction(ttansactions);
        expect(result).toEqual(expectedResult);
    });
});
