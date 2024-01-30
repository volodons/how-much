import axios from 'axios';

export const fetchAllCurrencies = async () => {
    const allCurrencies = await axios.get(
        'https://restcountries.com/v3.1/all?fields=currencies,cca3'
    );
    console.log(allCurrencies);
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
