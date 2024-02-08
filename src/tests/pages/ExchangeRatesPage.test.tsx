import { render, screen } from '@testing-library/react';

import ExchangeRatesPage from '../../pages/ExchangeRatesPage';

describe('ExchangeRatesPage component', () => {
    it('should render Navigation component', () => {
        render(<ExchangeRatesPage />);
        const navigationComponent = screen.getByTestId('navigation-component');
        expect(navigationComponent).toBeInTheDocument();
    });

    it('should render Title component', () => {
        render(<ExchangeRatesPage />);
        const titleComponent = screen.getByTestId('title-component');
        expect(titleComponent).toBeInTheDocument();
    });

    it('should render CurrentCurrency component', () => {
        render(<ExchangeRatesPage />);
        const currentCurrencyComponent = screen.getByTestId(
            'current-currency-component'
        );
        expect(currentCurrencyComponent).toBeInTheDocument();
    });

    it('should render ExchangeRates component', () => {
        render(<ExchangeRatesPage />);
        const exchangeRatesComponent = screen.getByTestId(
            'exchange-rates-component'
        );
        expect(exchangeRatesComponent).toBeInTheDocument();
    });
});
