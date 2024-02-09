import {
    CurrencyConverter,
    CurrentCurrency,
    ExchangeRates,
    Navigation,
    Title,
} from '../../components/index';

describe('index.ts', () => {
    it('should export CurrencyConverter component', () => {
        expect(CurrencyConverter).toBeDefined();
        expect(CurrencyConverter).toMatchSnapshot();
    });

    it('should export CurrentCurrency component', () => {
        expect(CurrentCurrency).toBeDefined();
        expect(CurrentCurrency).toMatchSnapshot();
    });

    it('should export ExchangeRates component', () => {
        expect(ExchangeRates).toBeDefined();
        expect(ExchangeRates).toMatchSnapshot();
    });

    it('should export Navigation component', () => {
        expect(Navigation).toBeDefined();
        expect(Navigation).toMatchSnapshot();
    });

    it('should export Title component', () => {
        expect(Title).toBeDefined();
        expect(Title).toMatchSnapshot();
    });
});
