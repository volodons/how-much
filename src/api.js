import axios from 'axios';

const FETCH_CURRENCIES_URL =
    'https://restcountries.com/v3.1/all?fields=currencies';
const FETCH_EXCHANGE_RATES_URL =
    'https://api.currencyapi.com/v3/latest?apikey=fca_live_HazPVkXc4QQOtWFenuShnJyWgSfY5aeWGmge0UDX';

export const fetchAllExchangeRatesCurrencies = async () => {
    const allCurrencies = await axios.get(`${FETCH_CURRENCIES_URL}`);
    const allCurrencyCodes = [
        ...new Set(
            allCurrencies.data.map((item) => Object.keys(item.currencies)[0])
        ),
    ];
    const filteredAllCurrencyCodes = allCurrencyCodes.filter(
        (code) => code && !['CKD', 'MRU', 'SSP', 'STN', 'VES'].includes(code)
    );
    const allCurrenciesWithData = filteredAllCurrencyCodes.map(
        (currency, index) => ({
            id: index + 1,
            code: currency,
            exchangeRate: 0,
            featured: false,
        })
    );
    return {
        allCurrenciesWithData,
        filteredAllCurrencyCodes,
    };
};

export const fetchExchangeRates = async (baseCurrency, allCurrencyCodes) => {
    const allExchangeRates = await axios.get(
        `${FETCH_EXCHANGE_RATES_URL}&currencies=${allCurrencyCodes}&base_currency=${baseCurrency}`
    );
    return allExchangeRates.data.data;
};

export const fetchAllConverterCurrencies = async () => {
    const allConverterCurrencies = await axios.get(`${FETCH_CURRENCIES_URL}`);
    const allConverterCurrencyCodes = [
        ...new Set(
            allConverterCurrencies.data.map(
                (item) => Object.keys(item.currencies)[0]
            )
        ),
    ];
    const filteredAllConverterCurrencyCodes = allConverterCurrencyCodes.filter(
        (code) => code && !['CKD', 'MRU', 'SSP', 'STN', 'VES'].includes(code)
    );
    const allConverterCurrenciesWithData =
        filteredAllConverterCurrencyCodes.map((currency, index) => ({
            id: index + 1,
            code: currency,
        }));
    return allConverterCurrenciesWithData;
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
