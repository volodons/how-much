import { createSlice } from '@reduxjs/toolkit';

const exchangeRatesSlice = createSlice({
    name: 'Exchange Rates',
    initialState: {
        amountBeforeConversion: null,
        amountAfterConversion: null,
        baseCurrency: '',
        targetCurrency: '',
        exchangeRate: null,
    },
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

export { actions as exchangeRatesActions, reducer as exchangeRatesReducer };
