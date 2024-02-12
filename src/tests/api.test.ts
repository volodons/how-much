import axios from 'axios';

import {
    FETCH_CURRENCIES_URL,
    FETCH_EXCHANGE_RATES_URL,
    FETCH_BASE_CURRENCY_URL,
    fetchExchangeRatesCurrencies,
    fetchConverterCurrencies,
    fetchExchangeRate,
    fetchBaseCurrency,
} from '../api';

jest.mock('axios');

describe('API Functions', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch currencies for exchange rates correctly - filteredCurrencyCodes', async () => {
        const mockedCurrenciesData = [
            {
                currencies: {
                    USD: { name: 'United States Dollar', symbol: '$' },
                },
            },
            { currencies: { EUR: { name: 'Euro', symbol: '€' } } },
        ];
        const expectedCurrencies = ['USD', 'EUR'];

        (
            axios.get as jest.MockedFunction<typeof axios.get>
        ).mockResolvedValueOnce({
            data: mockedCurrenciesData,
        });

        const result = await fetchExchangeRatesCurrencies();

        expect(result.filteredCurrencyCodes).toEqual(expectedCurrencies);
    });

    it('should fetch currencies for exchange rates correctly - currenciesWithData', async () => {
        const mockedCurrenciesData = [
            {
                currencies: {
                    USD: { name: 'United States Dollar', symbol: '$' },
                },
            },
            { currencies: { EUR: { name: 'Euro', symbol: '€' } } },
        ];
        const expectedCurrencies = [
            { id: 1, code: 'USD', exchangeRate: 0, featured: false },
            { id: 2, code: 'EUR', exchangeRate: 0, featured: false },
        ];

        (
            axios.get as jest.MockedFunction<typeof axios.get>
        ).mockResolvedValueOnce({
            data: mockedCurrenciesData,
        });

        const result = await fetchExchangeRatesCurrencies();

        expect(result.currenciesWithData).toEqual(expectedCurrencies);
    });

    it('should fetch currencies for exchange rates correctly - Axios API Get Request', async () => {
        const mockedCurrenciesData = [
            {
                currencies: {
                    USD: { name: 'United States Dollar', symbol: '$' },
                },
            },
            { currencies: { EUR: { name: 'Euro', symbol: '€' } } },
        ];

        (
            axios.get as jest.MockedFunction<typeof axios.get>
        ).mockResolvedValueOnce({
            data: mockedCurrenciesData,
        });

        await fetchExchangeRatesCurrencies();

        expect(axios.get).toHaveBeenCalledWith(FETCH_CURRENCIES_URL);
    });

    it('should fetch converter currencies correctly', async () => {
        const mockedCurrenciesData = [
            {
                currencies: {
                    USD: { name: 'United States Dollar', symbol: '$' },
                },
            },
            { currencies: { EUR: { name: 'Euro', symbol: '€' } } },
        ];
        const expectedCurrencies = [
            { id: 1, code: 'USD' },
            { id: 2, code: 'EUR' },
        ];

        (
            axios.get as jest.MockedFunction<typeof axios.get>
        ).mockResolvedValueOnce({
            data: mockedCurrenciesData,
        });

        const result = await fetchConverterCurrencies();

        expect(result).toEqual(expectedCurrencies);
        expect(axios.get).toHaveBeenCalledWith(FETCH_CURRENCIES_URL);
    });

    it('should fetch exchange rate correctly', async () => {
        const mockedExchangeRateData = {
            data: {
                EUR: { value: 0.8 },
            },
        };
        const baseCurrency = 'USD';
        const targetCurrency = 'EUR';
        const expectedExchangeRate = 0.8;

        (
            axios.get as jest.MockedFunction<typeof axios.get>
        ).mockResolvedValueOnce({
            data: mockedExchangeRateData,
        });

        const result = await fetchExchangeRate(baseCurrency, targetCurrency);

        expect(result).toEqual(expectedExchangeRate);
        expect(axios.get).toHaveBeenCalledWith(
            `${FETCH_EXCHANGE_RATES_URL}&currencies=${targetCurrency}&base_currency=${baseCurrency}`
        );
    });

    it('should fetch base currency correctly', async () => {
        const mockedBaseCurrencyData = 'USD';
        const expectedBaseCurrency = 'USD';

        (
            axios.get as jest.MockedFunction<typeof axios.get>
        ).mockResolvedValueOnce({
            data: mockedBaseCurrencyData,
        });

        const result = await fetchBaseCurrency();

        expect(result).toEqual(expectedBaseCurrency);
        expect(axios.get).toHaveBeenCalledWith(FETCH_BASE_CURRENCY_URL);
    });
});
