import { createSlice } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchAllExchangeRatesCurrencies, fetchExchangeRates } from '../../api';

const initialState = {
    allCurrencies: [],
    allCurrencyCodes: [],
    baseCurrency: '',
    error: null,
};

const currenciesSlice = createSlice({
    name: 'Currencies',
    initialState,
    reducers: {
        FETCH_ALL_CURRENCIES: (state) => state,
        FETCH_ALL_CURRENCIES_FAILURE: (state, action) => {
            state.error = action.payload;
        },
        SET_ALL_CURRENCIES: (state, action) => {
            state.allCurrencies = [...action.payload.allCurrenciesWithData];
            state.allCurrencyCodes = [
                ...action.payload.filteredAllCurrencyCodes,
            ];
        },
        SET_BASE_CURRENCY: (state, action) => {
            state.baseCurrency = action.payload;
        },
        FETCH_EXCHANGE_RATES: (state) => state,
        FETCH_EXCHANGE_RATES_FAILURE: (state, action) => {
            state.error = action.payload;
        },
        SET_EXCHANGE_RATES: (state, action) => {
            Object.entries(action.payload).forEach(([code, currency]) => {
                const currencyToUpdate = state.allCurrencies.find(
                    (item) => item.code === code
                );
                if (currencyToUpdate) {
                    currencyToUpdate.exchangeRate = currency.value.toFixed(2);
                }
            });
        },
        ADD_TO_FEATURED: (state, action) => {
            state.allCurrencies = state.allCurrencies.map((currency) => {
                if (currency.id === action.payload.id) {
                    return {
                        ...currency,
                        featured: true,
                    };
                }
                return currency;
            });
        },
        REMOVE_FROM_FEATURED: (state, action) => {
            state.allCurrencies = state.allCurrencies.map((currency) => {
                if (currency.id === action.payload.id) {
                    return {
                        ...currency,
                        featured: false,
                    };
                }
                return currency;
            });
        },
    },
});

function* fetchAllCurrenciesSaga() {
    try {
        const response = yield call(fetchAllExchangeRatesCurrencies);
        yield put(currenciesActions.SET_ALL_CURRENCIES(response));
    } catch (error) {
        yield put(
            currenciesActions.FETCH_ALL_CURRENCIES_FAILURE(error.message)
        );
    }
}

export function* watchAllCurrencies() {
    yield takeLatest(
        currenciesActions.FETCH_ALL_CURRENCIES,
        fetchAllCurrenciesSaga
    );
}

function* fetchExchangeRatesSaga(action) {
    const { baseCurrency, allCurrencyCodes } = action.payload;
    try {
        const response = yield call(
            fetchExchangeRates,
            baseCurrency,
            allCurrencyCodes
        );
        yield put(currenciesActions.SET_EXCHANGE_RATES(response));
    } catch (error) {
        yield put(
            currenciesActions.FETCH_EXCHANGE_RATES_FAILURE(error.message)
        );
    }
}

export function* watchExchangeRates() {
    yield takeLatest(
        currenciesActions.FETCH_EXCHANGE_RATES,
        fetchExchangeRatesSaga
    );
}

const { actions, reducer } = currenciesSlice;

export const currenciesActions = actions;
export const currenciesReducer = reducer;
