import { call, put, takeLatest } from "redux-saga/effects";
import { exchangeRatesActions } from "../ducks/exchangeRatesDuck";

const apiCallFunction = () => console.log("Test API call");

function* fetchExchangeRatesSaga(action) {
    try {
        const response = yield call(apiCallFunction, action.payload);
        yield put(exchangeRatesActions.SET_EXCHANGE_RATE(response.data));
    } catch (error) {
        yield put(
            exchangeRatesActions.FETCH_EXCHANGE_RATES_FAILURE(error.message)
        );
    }
}

function* watchFetchExchangeRates() {
    yield takeLatest(
        exchangeRatesActions.FETCH_EXCHANGE_RATES,
        fetchExchangeRatesSaga
    );
}

export default function* rootSaga() {
    yield watchFetchExchangeRates();
}
