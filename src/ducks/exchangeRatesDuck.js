import { createSlice } from "@reduxjs/toolkit";

const exchangeRatesSlice = createSlice({
    name: "Exchange Rates",
    initialState: {
        amountBeforeConversion: null,
        amountAfterConversion: null,
        baseCurrency: null,
        targetCurrency: null,
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
    },
});

const { actions, reducer } = exchangeRatesSlice;

export { actions as exchangeRatesSlice, reducer as exchangeRatesReducer };
