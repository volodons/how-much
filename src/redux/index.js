import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { exchangeRatesReducer } from '../ducks/exchangeRatesDuck';
import { currenciesReducer } from '../ducks/currenciesDuck';
import { watchExchangeRates } from '../ducks/exchangeRatesDuck';

const rootReducer = combineReducers({
    exchangeRates: exchangeRatesReducer,
    currencies: currenciesReducer,
});

function* rootSaga() {
    yield all([watchExchangeRates()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
