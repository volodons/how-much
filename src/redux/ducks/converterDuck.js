import { createSlice } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchAllConverterCurrencies, fetchExchangeRate } from '../../api';

const initialState = {
    allCurrencies: [],
    baseCurrency: '',
    baseCurrencyAmount: 0,
    targetCurrency: '',
    targetCurrencyAmount: 0,
    exchangeRate: 0,
    error: null,
};

const converterSlice = createSlice({
    name: 'Converter',
    initialState,
    reducers: {
        FETCH_ALL_CURRENCIES: (state) => state,
        FETCH_ALL_CURRENCIES_FAILURE: (state, action) => {
            state.error = action.payload;
        },
        SET_ALL_CURRENCIES: (state, action) => {
            state.allCurrencies = [...action.payload];
        },
        SET_BASE_CURRENCY: (state, action) => {
            state.baseCurrency = action.payload;
        },
        SET_BASE_CURRENCY_AMOUNT: (state, action) => {
            state.baseCurrencyAmount = action.payload;
        },
        SET_TARGET_CURRENCY: (state, action) => {
            state.targetCurrency = action.payload;
        },
        FETCH_EXCHANGE_RATE: (state) => state,
        FETCH_EXCHANGE_RATE_FAILURE: (state, action) => {
            state.error = action.payload;
        },
        SET_EXCHANGE_RATE: (state, action) => {
            state.exchangeRate = action.payload;
        },
        CALCULATE_TARGET_CURRENCY_AMOUNT: (state) => {
            state.targetCurrencyAmount = (
                state.baseCurrencyAmount * state.exchangeRate
            ).toFixed(2);
        },
    },
});

function* fetchAllConverterCurrenciesSaga() {
    try {
        const response = yield call(fetchAllConverterCurrencies);
        yield put(converterActions.SET_ALL_CURRENCIES(response));
    } catch (error) {
        yield put(converterActions.FETCH_ALL_CURRENCIES_FAILURE(error.message));
    }
}

export function* watchAllConverterCurrencies() {
    yield takeLatest(
        converterActions.FETCH_ALL_CURRENCIES,
        fetchAllConverterCurrenciesSaga
    );
}

function* fetchExchangeRateSaga(action) {
    const { baseCurrency, targetCurrency } = action.payload;
    try {
        const response = yield call(
            fetchExchangeRate,
            baseCurrency,
            targetCurrency
        );
        yield put(converterActions.SET_EXCHANGE_RATE(response));
        yield put(converterActions.CALCULATE_TARGET_CURRENCY_AMOUNT());
    } catch (error) {
        yield put(converterActions.FETCH_EXCHANGE_RATE_FAILURE(error.message));
    }
}

export function* watchExchangeRate() {
    yield takeLatest(
        converterActions.FETCH_EXCHANGE_RATE,
        fetchExchangeRateSaga
    );
}

const { actions, reducer } = converterSlice;

export const converterActions = actions;
export const converterReducer = reducer;
