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
    });

    it('should export CurrentCurrency component', () => {
        expect(CurrentCurrency).toBeDefined();
    });

    it('should export ExchangeRates component', () => {
        expect(ExchangeRates).toBeDefined();
    });

    it('should export Navigation component', () => {
        expect(Navigation).toBeDefined();
    });

    it('should export Title component', () => {
        expect(Title).toBeDefined();
    });
});
