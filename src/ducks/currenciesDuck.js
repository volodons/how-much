import { createSlice } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchAllCurrencies } from '../api';

const initialState = {
    allCurrencies: [],
    featuredCurrencies: [],
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
            state.allCurrencies = [...action.payload];
        },
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

function* fetchAllCurrenciesSaga() {
    try {
        const response = yield call(fetchAllCurrencies);
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

const { actions, reducer } = currenciesSlice;

export const currenciesActions = actions;
export const currenciesReducer = reducer;
