import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import {
    currenciesReducer,
    watchAllCurrencies,
    watchExchangeRates,
} from './ducks/currenciesDuck';
import { exchangeRatesReducer } from './ducks/exchangeRatesDuck';

const rootReducer = combineReducers({
    currencies: currenciesReducer,
    exchangeRates: exchangeRatesReducer,
});

function* rootSaga() {
    yield all([watchAllCurrencies(), watchExchangeRates()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
