import { runSaga } from 'redux-saga';

import { fetchConverterCurrencies, fetchExchangeRate } from '../../../api';
import {
    converterActions,
    fetchConverterCurrenciesSaga,
    fetchExchangeRateSaga,
} from '../../../redux/ducks/converterDuck';

describe('converterDuck', () => {
    describe('fetchConverterCurrenciesSaga', () => {
        it('should fetch currencies and dispatch SET_CURRENCIES on success', async () => {
            const mockCurrencies = [{ id: 1, code: 'USD' }];
            jest.spyOn(fetchConverterCurrencies, 'call').mockResolvedValue(
                mockCurrencies
            );
            const dispatched: any[] = [];
            await runSaga(
                {
                    dispatch: (action: any) => dispatched.push(action),
                },
                fetchConverterCurrenciesSaga
            );
            expect(dispatched).toContainEqual(
                converterActions.SET_CURRENCIES(mockCurrencies)
            );
        });

        it('should dispatch FETCH_CURRENCIES_FAILURE on failure', async () => {
            jest.spyOn(fetchConverterCurrencies, 'call').mockRejectedValue(
                new Error('Failed')
            );
            const dispatched: any[] = [];
            await runSaga(
                {
                    dispatch: (action: any) => dispatched.push(action),
                },
                fetchConverterCurrenciesSaga
            );
            expect(dispatched[0].type).toBe(
                converterActions.FETCH_CURRENCIES_FAILURE.type
            );
            expect(dispatched[0].payload).toBe('Failed');
        });
    });

    describe('fetchExchangeRateSaga', () => {
        it('should fetch exchange rate and dispatch SET_EXCHANGE_RATE and CALCULATE_TARGET_CURRENCY_AMOUNT on success', async () => {
            const mockResponse = 1.2;
            jest.spyOn(fetchExchangeRate, 'call').mockResolvedValue(
                mockResponse
            );
            const dispatched: any[] = [];
            const baseCurrency = 'USD';
            const targetCurrency = 'EUR';
            await runSaga(
                {
                    dispatch: (action: any) => dispatched.push(action),
                },
                fetchExchangeRateSaga,
                converterActions.FETCH_EXCHANGE_RATE({
                    baseCurrency,
                    targetCurrency,
                })
            );
            expect(dispatched).toContainEqual(
                converterActions.SET_EXCHANGE_RATE(mockResponse)
            );
            expect(dispatched).toContainEqual(
                converterActions.CALCULATE_TARGET_CURRENCY_AMOUNT()
            );
        });

        it('should dispatch FETCH_EXCHANGE_RATE_FAILURE on failure', async () => {
            jest.spyOn(fetchExchangeRate, 'call').mockRejectedValue(
                new Error('Failed')
            );
            const dispatched: any[] = [];
            const baseCurrency = 'USD';
            const targetCurrency = 'EUR';
            await runSaga(
                {
                    dispatch: (action: any) => dispatched.push(action),
                },
                fetchExchangeRateSaga,
                converterActions.FETCH_EXCHANGE_RATE({
                    baseCurrency,
                    targetCurrency,
                })
            );
            expect(dispatched[0].type).toBe(
                converterActions.FETCH_EXCHANGE_RATE_FAILURE.type
            );
            expect(dispatched[0].payload).toBe('Failed');
        });
    });
});
