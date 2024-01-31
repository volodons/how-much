import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    baseCurrency: '',
    targetCurrency: '',
    exchangeRate: null,
    error: null,
};

const exchangeRatesSlice = createSlice({
    name: 'Exchange Rates',
    initialState,
    reducers: {
        SET_AMOUNT_BEFORE_CONVERSION: (state, action) => {
            state.amountBeforeConversion = action.payload;
        },
        SET_AMOUNT_AFTER_CONVERSION: (state, action) => {
            state.amountAfterConversion = action.payload;
        },
        SET_BASE_CURRENCY: (state, action) => {
            state.baseCurrency = action.payload;
        },
        SET_TARGET_CURRENCY: (state, action) => {
            state.targetCurrency = action.payload;
        },
        SET_EXCHANGE_RATE: (state, action) => {
            state.exchangeRate = action.payload;
        },
        FETCH_EXCHANGE_RATES: (state) => state,
        FETCH_EXCHANGE_RATES_FAILURE: (state, action) => {
            state.error = action.payload;
        },
    },
});

const { actions, reducer } = exchangeRatesSlice;

export const exchangeRatesActions = actions;
export const exchangeRatesReducer = reducer;
