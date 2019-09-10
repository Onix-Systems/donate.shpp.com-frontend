import {useReducer} from 'react';
import _defaults from 'lodash/defaults';

export const createReducerFactory = (reducer, initialState) => (defaultValue = {}) => {
    return useReducer(
        reducer,
        {
            ...initialState,
            ..._defaults(defaultValue, initialState)
        }
    );
};
