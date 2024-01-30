import { createSlice } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

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

const apiCallFunction = () => console.log('Test API call');

function* fetchExchangeRatesSaga(action) {
    try {
        const response = yield call(apiCallFunction, action.payload);
        yield put(exchangeRatesSlice.SET_EXCHANGE_RATE(response.data));
    } catch (error) {
        yield put(
            exchangeRatesSlice.FETCH_EXCHANGE_RATES_FAILURE(error.message)
        );
    }
}

export function* watchExchangeRates() {
    yield takeLatest(exchangeRatesSlice, fetchExchangeRatesSaga);
}

const { actions, reducer } = exchangeRatesSlice;

export { actions as exchangeRatesActions, reducer as exchangeRatesReducer };
