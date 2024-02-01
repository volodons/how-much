import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import {
    currenciesReducer,
    watchAllCurrencies,
    watchExchangeRates,
} from './ducks/currenciesDuck';
import {
    converterReducer,
    watchAllConverterCurrencies,
    watchExchangeRate,
} from './ducks/converterDuck';

const rootReducer = combineReducers({
    currencies: currenciesReducer,
    converter: converterReducer,
});

function* rootSaga() {
    yield all([
        watchAllCurrencies(),
        watchExchangeRates(),
        watchAllConverterCurrencies(),
        watchExchangeRate(),
    ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
