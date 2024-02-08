import { render, screen } from '@testing-library/react';

import CurrencyConverterPage from '../../pages/CurrencyConverterPage';

describe('CurrencyConverterPage component', () => {
    it('should render Navigation component', () => {
        render(<CurrencyConverterPage />);
        const navigationComponent = screen.getByTestId('navigation-component');
        expect(navigationComponent).toBeInTheDocument();
    });

    it('should render Title component', () => {
        render(<CurrencyConverterPage />);
        const titleComponent = screen.getByTestId('title-component');
        expect(titleComponent).toBeInTheDocument();
    });

    it('should render CurrencyConverter component', () => {
        render(<CurrencyConverterPage />);
        const currencyConverterComponent = screen.getByTestId(
            'currency-converter-component'
        );
        expect(currencyConverterComponent).toBeInTheDocument();
    });
});
