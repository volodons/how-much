import { combineReducers } from "@reduxjs/toolkit";

import { exchangeRatesReducer } from "../ducks/exchangeRatesDuck";
import { favoriteCurrenciesReducer } from "../ducks/favoriteCurrenciesDuck";

const rootReducer = combineReducers({
    exchangeRates: exchangeRatesReducer,
    favoriteCurrencies: favoriteCurrenciesReducer,
});

export default rootReducer;
