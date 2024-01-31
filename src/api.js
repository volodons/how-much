import axios from 'axios';

const FETCH_ALL_CURRENCIES_URL =
    'https://restcountries.com/v3.1/all?fields=currencies';
const FETCH_EXCHANGE_RATES_URL =
    'https://api.currencyapi.com/v3/latest?apikey=fca_live_Z1EPz50xGRjABKY5yyGvfS6YMLD7j7IBGuKTdz61';

export const fetchAllCurrencies = async () => {
    const allCurrencies = await axios.get(`${FETCH_ALL_CURRENCIES_URL}`);
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
