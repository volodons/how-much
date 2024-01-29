import { all } from "redux-saga/effects";

import exchangeRatesSaga from "./sagas";

export default function* rootSaga() {
    yield all([exchangeRatesSaga()]);
}
