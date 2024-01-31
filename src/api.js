import axios from 'axios';

const FETCH_ALL_CURRENCIES_URL =
    'https://restcountries.com/v3.1/all?fields=currencies,cca3';

export const fetchAllCurrencies = async () => {
    const allCurrencies = await axios.get(`${FETCH_ALL_CURRENCIES_URL}`);
    const uniqueCurrencies = [
        ...new Set(
            allCurrencies.data.map((item) => Object.keys(item.currencies)[0])
        ),
    ];
    const uniqueCurrenciesWithData = Array.from(uniqueCurrencies).map(
        (currency, index) => ({
            id: index + 1,
            currency,
            exchangeRate: 0,
        })
    );
    return uniqueCurrenciesWithData;
};
