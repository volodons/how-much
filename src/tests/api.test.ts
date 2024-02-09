import axios from 'axios';

import {
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

    it('should fetch currencies for exchange rates correctly', async () => {
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

        expect(result.filteredCurrencyCodes).toEqual(['USD', 'EUR']);
        expect(result.currenciesWithData).toEqual(expectedCurrencies);
        expect(axios.get).toHaveBeenCalledWith(
            'https://restcountries.com/v3.1/all?fields=currencies'
        );
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
        expect(axios.get).toHaveBeenCalledWith(
            'https://restcountries.com/v3.1/all?fields=currencies'
        );
    });

    it('should fetch exchange rate correctly', async () => {
        const mockedExchangeRateData = {
            data: {
                EUR: { value: 0.8 },
            },
        };
        const baseCurrency = 'USD';
        const targetCurrency = 'EUR';

        (
            axios.get as jest.MockedFunction<typeof axios.get>
        ).mockResolvedValueOnce({
            data: mockedExchangeRateData,
        });

        const result = await fetchExchangeRate(baseCurrency, targetCurrency);

        expect(result).toEqual(0.8);
        expect(axios.get).toHaveBeenCalledWith(
            'https://api.currencyapi.com/v3/latest?apikey=cur_live_Ue67NDHXG1Q3Qo2CXng3GA8hSwN2kwDF1ynX0zRJ&currencies=EUR&base_currency=USD'
        );
    });

    it('should fetch base currency correctly', async () => {
        const mockedBaseCurrencyData = 'USD';

        (
            axios.get as jest.MockedFunction<typeof axios.get>
        ).mockResolvedValueOnce({
            data: mockedBaseCurrencyData,
        });

        const result = await fetchBaseCurrency();

        expect(result).toEqual('USD');
        expect(axios.get).toHaveBeenCalledWith('https://ipapi.co/currency/');
    });
});
