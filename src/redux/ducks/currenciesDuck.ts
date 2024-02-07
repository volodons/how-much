import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
    fetchExchangeRatesCurrencies,
    fetchExchangeRates,
    fetchBaseCurrency,
} from '../../api';

interface Currency {
    id: number;
    code: string;
    exchangeRate: number;
    featured: boolean;
}

interface ExchangeRatesCurrenciesResponse {
    currenciesWithData: Currency[];
    filteredCurrencyCodes: string[];
}

interface ExchangeRate {
    [key: string]: {
        code: string;
        value: number;
    };
}

interface CurrenciesState {
    currencies: Currency[];
    currencyCodes: string[];
    baseCurrency: string;
    error: string | null;
}

const initialState: CurrenciesState = {
    currencies: [],
    currencyCodes: [],
    baseCurrency: '',
    error: null,
};

const currenciesSlice = createSlice({
    name: 'Currencies',
    initialState,
    reducers: {
        FETCH_CURRENCIES: (state) => state,
        FETCH_CURRENCIES_FAILURE: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        SET_CURRENCIES: (
            state,
            action: PayloadAction<ExchangeRatesCurrenciesResponse>
        ) => {
            state.currencies = [...action.payload.currenciesWithData];
            state.currencyCodes = [...action.payload.filteredCurrencyCodes];
        },
        FETCH_BASE_CURRENCY: (state) => state,
        FETCH_BASE_CURRENCY_FAILURE: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        SET_BASE_CURRENCY: (state, action: PayloadAction<string>) => {
            state.baseCurrency = action.payload;
        },
        FETCH_EXCHANGE_RATES: (state) => state,
        FETCH_EXCHANGE_RATES_FAILURE: (
            state,
            action: PayloadAction<string>
        ) => {
            state.error = action.payload;
        },
        SET_EXCHANGE_RATES: (state, action: PayloadAction<ExchangeRate[]>) => {
            Object.entries(action.payload).forEach(([code, currency]) => {
                const currencyToUpdate = state.currencies.find(
                    (item) => item.code === code
                );
                if (currencyToUpdate) {
                    currencyToUpdate.exchangeRate = parseFloat(
                        (currency as any).value.toFixed(2)
                    );
                }
            });
        },
        ADD_TO_FEATURED_CURRENCIES: (state, action) => {
            state.currencies = state.currencies.map((currency) => {
                if (currency.id === action.payload.id) {
                    return {
                        ...currency,
                        featured: true,
                    };
                }
                return currency;
            });
        },
        REMOVE_FROM_FEATURED_CURRENCIES: (state, action) => {
            state.currencies = state.currencies.map((currency) => {
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

function* fetchCurrenciesSaga() {
    try {
        const response: ExchangeRatesCurrenciesResponse = yield call(
            fetchExchangeRatesCurrencies
        );
        yield put(currenciesActions.SET_CURRENCIES(response));
    } catch (error: any) {
        yield put(currenciesActions.FETCH_CURRENCIES_FAILURE(error.message));
    }
}

export function* watchCurrencies() {
    yield takeLatest(currenciesActions.FETCH_CURRENCIES, fetchCurrenciesSaga);
}

function* fetchBaseCurrencySaga() {
    try {
        const response: string = yield call(fetchBaseCurrency);
        yield put(currenciesActions.SET_BASE_CURRENCY(response));
    } catch (error: any) {
        yield put(currenciesActions.FETCH_BASE_CURRENCY_FAILURE(error.message));
    }
}

export function* watchBaseCurrency() {
    yield takeLatest(
        currenciesActions.FETCH_BASE_CURRENCY,
        fetchBaseCurrencySaga
    );
}

function* fetchExchangeRatesSaga(
    action: PayloadAction<{
        baseCurrency: string;
        currencyCodes: string[];
    }>
) {
    const { baseCurrency, currencyCodes } = action.payload;
    try {
        const response: ExchangeRate[] = yield call(
            fetchExchangeRates,
            baseCurrency,
            currencyCodes
        );
        yield put(currenciesActions.SET_EXCHANGE_RATES(response));
    } catch (error: any) {
        yield put(
            currenciesActions.FETCH_EXCHANGE_RATES_FAILURE(error.message)
        );
    }
}

export function* watchExchangeRates() {
    yield takeLatest(
        currenciesActions.FETCH_EXCHANGE_RATES.type,
        fetchExchangeRatesSaga
    );
}

const { actions, reducer } = currenciesSlice;

export const currenciesActions = actions;
export const currenciesReducer = reducer;
