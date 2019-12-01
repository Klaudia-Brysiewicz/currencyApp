import rootReducer from '../reducers';

export enum ExchangeActionTypes {
    CHANGE_RATE = 'CHANGE_RATE',
    ADD_TRANSACTION = 'ADD_TRANSACTION',
    REMOVE_TRANSACTION = 'REMOVE_TRANSACTION',
}

export interface Transaction {
    [key: string]: number | string;
    description: string;
    transactionValue: number;
    id: number;
    valueAfterExchange: string;
}

export interface ExchangeState {
    exchangeRate: string;
    transactions: Transaction[];
    summary: number;
    greatestTransaction: Transaction | null;
    summaryAfterExchange?: number;
}

export interface ChangeRateAction {
    type: ExchangeActionTypes.CHANGE_RATE;
    data: string;
}

export interface AddTransactionAction {
    type: ExchangeActionTypes.ADD_TRANSACTION;
    data: Transaction;
}

export interface RemoveTransactionAction {
    type: ExchangeActionTypes.REMOVE_TRANSACTION;
    id: number;
}

export type Action = ChangeRateAction | AddTransactionAction | RemoveTransactionAction;

export type AppState = ReturnType<typeof rootReducer>;

export type EventType = React.ChangeEvent<HTMLInputElement>;
export interface RootState {
    exchange: ExchangeState;
}