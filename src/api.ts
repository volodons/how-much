import axios from 'axios';

const FETCH_CURRENCIES_URL =
    'https://restcountries.com/v3.1/all?fields=currencies';
const FETCH_EXCHANGE_RATES_URL =
    'https://api.currencyapi.com/v3/latest?apikey=fca_live_HazPVkXc4QQOtWFenuShnJyWgSfY5aeWGmge0UDX';
const FETCH_BASE_CURRENCY_URL = 'https://ipapi.co/currency/';

const fetchCurrencies = async () => {
    const response = await axios.get(FETCH_CURRENCIES_URL);
    return response.data;
};

const filterCurrencyCodes = (currencies) => {
    const uniqueCurrencyCodes = [
        ...new Set(currencies.map((item) => Object.keys(item.currencies)[0])),
    ];
    const filteredCurrencies = uniqueCurrencyCodes.filter(
        (code) => code && !['CKD', 'MRU', 'SSP', 'STN', 'VES'].includes(code)
    );
    return filteredCurrencies;
};

export const fetchExchangeRatesCurrencies = async () => {
    const currencies = await fetchCurrencies();
    const filteredCurrencyCodes = filterCurrencyCodes(currencies);
    const currenciesWithData = filteredCurrencyCodes.map((currency, index) => ({
        id: index + 1,
        code: currency,
        exchangeRate: 0,
        featured: false,
    }));
    return {
        currenciesWithData,
        filteredCurrencyCodes,
    };
};

export const fetchExchangeRates = async (baseCurrency, currencyCodes) => {
    const exchangeRates = await axios.get(
        `${FETCH_EXCHANGE_RATES_URL}&currencies=${currencyCodes}&base_currency=${baseCurrency}`
    );
    return exchangeRates.data.data;
};

export const fetchConverterCurrencies = async () => {
    const currencies = await fetchCurrencies();
    const filteredCurrencyCodes = filterCurrencyCodes(currencies);
    const currenciesWithData = filteredCurrencyCodes.map((currency, index) => ({
        id: index + 1,
        code: currency,
    }));
    return currenciesWithData;
};

export const fetchExchangeRate = async (baseCurrency, targetCurrency) => {
    const exchangeRateResponse = await axios.get(
        `${FETCH_EXCHANGE_RATES_URL}&currencies=${targetCurrency}&base_currency=${baseCurrency}`
    );
    const exchangeRateData = exchangeRateResponse.data.data;
    const key = Object.keys(exchangeRateData)[0];
    const exchangeRate = exchangeRateData[key].value;
    return exchangeRate;
};

export const fetchBaseCurrency = async () => {
    const baseCurrencyResponse = await axios.get(FETCH_BASE_CURRENCY_URL);
    const baseCurrency = { id: 9999, code: baseCurrencyResponse.data };
    return baseCurrency;
};
