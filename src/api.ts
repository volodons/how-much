import axios, { AxiosResponse } from 'axios';

export const FETCH_CURRENCIES_URL: string =
    'https://restcountries.com/v3.1/all?fields=currencies';
export const FETCH_EXCHANGE_RATES_URL: string =
    'https://api.currencyapi.com/v3/latest?apikey=cur_live_inOgMkylfQbPCJPxChEu4bkTgSHx9t1mwvoUiUO4';
export const FETCH_BASE_CURRENCY_URL: string = 'https://ipapi.co/currency/';

interface Currency {
    id: number;
    code: string;
    exchangeRate?: number;
    featured?: boolean;
}

interface CurrencyData {
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
}

interface ExchangeRate {
    code: string;
    value: number;
}

interface ExchangeRateData {
    data: {
        [currencyCode: string]: {
            value: number;
        };
    };
}

interface ExchangeRates {
    [currencyCode: string]: ExchangeRate;
}

const fetchCurrencies = async (): Promise<CurrencyData[]> => {
    const response: AxiosResponse<CurrencyData[]> = await axios.get(
        FETCH_CURRENCIES_URL
    );
    return response.data;
};

const filterCurrencyCodes = (currencies: CurrencyData[]): string[] => {
    const uniqueCurrencyCodes = [
        ...new Set(currencies.map((item) => Object.keys(item.currencies)[0])),
    ];
    const filteredCurrencies = uniqueCurrencyCodes.filter(
        (code) => code && !['CKD', 'MRU', 'SSP', 'STN', 'VES'].includes(code)
    );
    return filteredCurrencies;
};

export const fetchExchangeRatesCurrencies = async (): Promise<{
    currenciesWithData: Currency[];
    filteredCurrencyCodes: string[];
}> => {
    const currencies: CurrencyData[] = await fetchCurrencies();
    const filteredCurrencyCodes: string[] = filterCurrencyCodes(currencies);
    const currenciesWithData: Currency[] = filteredCurrencyCodes.map(
        (currency, index) => ({
            id: index + 1,
            code: currency,
            exchangeRate: 0,
            featured: false,
        })
    );
    return {
        currenciesWithData,
        filteredCurrencyCodes,
    };
};

export const fetchExchangeRates = async (
    baseCurrency: string,
    currencyCodes: string[]
): Promise<ExchangeRate[]> => {
    const exchangeRates: AxiosResponse<{ data: ExchangeRates }> =
        await axios.get(
            `${FETCH_EXCHANGE_RATES_URL}&currencies=${currencyCodes}&base_currency=${baseCurrency}`
        );
    return Object.values(exchangeRates.data.data);
};

export const fetchConverterCurrencies = async (): Promise<Currency[]> => {
    const currencies: CurrencyData[] = await fetchCurrencies();
    const filteredCurrencyCodes: string[] = filterCurrencyCodes(currencies);
    const currenciesWithData: Currency[] = filteredCurrencyCodes.map(
        (currency, index) => ({
            id: index + 1,
            code: currency,
        })
    );
    return currenciesWithData;
};

export const fetchExchangeRate = async (
    baseCurrency: string,
    targetCurrency: string
): Promise<number> => {
    try {
        const exchangeRateResponse: AxiosResponse<ExchangeRateData> =
            await axios.get(
                `${FETCH_EXCHANGE_RATES_URL}&currencies=${targetCurrency}&base_currency=${baseCurrency}`
            );

        const exchangeRateData: ExchangeRateData = exchangeRateResponse.data;
        const exchangeRateValue: number | undefined =
            exchangeRateData.data[targetCurrency]?.value;

        if (exchangeRateValue === undefined) {
            throw new Error(`Exchange rate for ${targetCurrency} not found`);
        }

        return exchangeRateValue;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        return 0;
    }
};

export const fetchBaseCurrency = async (): Promise<string> => {
    const baseCurrencyResponse: AxiosResponse<string> = await axios.get(
        FETCH_BASE_CURRENCY_URL
    );
    const baseCurrency = baseCurrencyResponse.data;
    return baseCurrency;
};
