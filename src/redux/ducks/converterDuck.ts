import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchConverterCurrencies, fetchExchangeRate } from '../../api';

interface Currency {
    id: number;
    code: string;
}

interface ConverterState {
    currencies: Currency[];
    baseCurrency: string;
    baseCurrencyAmount: number;
    targetCurrency: string;
    targetCurrencyAmount: number;
    exchangeRate: number;
    error: string | null;
}

const initialState: ConverterState = {
    currencies: [],
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
        FETCH_CURRENCIES: (state) => state,
        FETCH_CURRENCIES_FAILURE: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        SET_CURRENCIES: (state, action: PayloadAction<Currency[]>) => {
            state.currencies = [...action.payload];
        },
        SET_BASE_CURRENCY: (state, action: PayloadAction<string>) => {
            state.baseCurrency = action.payload;
        },
        SET_BASE_CURRENCY_AMOUNT: (state, action: PayloadAction<number>) => {
            state.baseCurrencyAmount = action.payload;
        },
        SET_TARGET_CURRENCY: (state, action: PayloadAction<string>) => {
            state.targetCurrency = action.payload;
        },
        FETCH_EXCHANGE_RATE: (state) => state,
        FETCH_EXCHANGE_RATE_FAILURE: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        SET_EXCHANGE_RATE: (state, action: PayloadAction<number>) => {
            state.exchangeRate = action.payload;
        },
        CALCULATE_TARGET_CURRENCY_AMOUNT: (state) => {
            state.targetCurrencyAmount = parseFloat(
                (state.baseCurrencyAmount * state.exchangeRate).toFixed(2)
            );
        },
    },
});

function* fetchConverterCurrenciesSaga() {
    try {
        const response: Currency[] = yield call(fetchConverterCurrencies);
        yield put(converterActions.SET_CURRENCIES(response));
    } catch (error: any) {
        yield put(converterActions.FETCH_CURRENCIES_FAILURE(error.message));
    }
}

export function* watchConverterCurrencies() {
    yield takeLatest(
        converterActions.FETCH_CURRENCIES.type,
        fetchConverterCurrenciesSaga
    );
}

function* fetchExchangeRateSaga(
    action: PayloadAction<{ baseCurrency: string; targetCurrency: string }>
) {
    const { baseCurrency, targetCurrency } = action.payload;
    try {
        const response: number = yield call(
            fetchExchangeRate,
            baseCurrency,
            targetCurrency
        );
        yield put(converterActions.SET_EXCHANGE_RATE(response));
        yield put(converterActions.CALCULATE_TARGET_CURRENCY_AMOUNT());
    } catch (error: any) {
        yield put(converterActions.FETCH_EXCHANGE_RATE_FAILURE(error.message));
    }
}

export function* watchExchangeRate() {
    yield takeLatest(
        converterActions.FETCH_EXCHANGE_RATE.type,
        fetchExchangeRateSaga
    );
}

const { actions, reducer } = converterSlice;

export const converterActions = actions;
export const converterReducer = reducer;
