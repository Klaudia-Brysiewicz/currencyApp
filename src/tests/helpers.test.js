import { getValueInEuro } from '../utils/helpers';

describe('test helpers functions', () => {
    it('getValueInEuro gives value in Euro', () => {
        const result = getValueInEuro(4.2, 234);
        expect(result).toBe("982.80");
    });
});
