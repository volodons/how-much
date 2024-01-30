import { createSlice } from '@reduxjs/toolkit';

import ALL_CURRENCIES from '../const/currencies';

const initialState = {
    allCurrencies: [...ALL_CURRENCIES],
    featuredCurrencies: [],
};

const currenciesSlice = createSlice({
    name: 'Currencies',
    initialState,
    reducers: {
        ADD_TO_FEATURED_CURRENCIES: (state, action) => {
            state.featuredCurrencies = [
                ...state.featuredCurrencies,
                action.payload,
            ];
            state.allCurrencies = state.allCurrencies.filter(
                (currency) => currency.id !== action.payload.id
            );
        },
        REMOVE_FROM_FEATURED_CURRENCIES: (state, action) => {
            state.featuredCurrencies = state.featuredCurrencies.filter(
                (currency) => currency.id !== action.payload.id
            );
            state.allCurrencies = [...state.allCurrencies, action.payload];
        },
    },
});

const { actions, reducer } = currenciesSlice;

export const currenciesActions = actions;
export const currenciesReducer = reducer;
