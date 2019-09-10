import {createReducerFactory} from './reducersHelpers';

const types = {
    setTransactions: 'SET_TRANSACTIONS'
};

const initialState = {
    transactions: []
};

const reducer = (state, {type, payload}) => {
    switch (type) {
        case types.setTransactions:
            return setTransactions(payload, state);
        default:
            return state;
    }
};

const setTransactions = (transactions, state) => {
    return {
        ...state,
        transactions
    };
};

export default {
    reducer,
    types,
    initialState,
    createReducer: createReducerFactory(reducer, initialState),
};
