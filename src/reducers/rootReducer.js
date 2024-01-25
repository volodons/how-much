import { combineReducers } from "@reduxjs/toolkit";
import { exchangeRatesReducer } from "../ducks/exchangeRatesDuck";

const rootReducer = combineReducers({
    exchangeRates: exchangeRatesReducer,
});

export default rootReducer;
