const initialState = {
    exchangeRate: 4.2,
};

export const exchange = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'CHANGE_RATE':
            return { ...state, exchangeRate: action.data };
        default: 
            return state;
    }
}