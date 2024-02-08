import { render, screen, fireEvent } from '@testing-library/react';

import Navigation from '../../components/Navigation';

describe('Navigation component', () => {
    it('should render without errors', () => {
        render(<Navigation />);
        const openButton = screen.getByTestId('open-button');
        expect(openButton).toBeInTheDocument();
    });

    it('should open and close the drawer when open button is clicked', () => {
        render(<Navigation />);
        const openButton = screen.getByTestId('open-button');
        act(() => {
            fireEvent.click(openButton);
        });
        const drawer = screen.getByTestId('drawer');
        expect(drawer).toHaveClass(
            'MuiDrawer-root',
            'MuiDrawer-modal',
            'MuiDrawer-paper'
        );
        fireEvent.click(openButton);
        expect(drawer).not.toBeVisible();
    });

    it('should display navigation links', () => {
        render(<Navigation />);
        const currencyConverterLink = screen.getByTestId(
            'currency-converter-link'
        );
        const exchangeRatesLink = screen.getByTestId('exchange-rates-click');
        expect(currencyConverterLink).toBeInTheDocument();
        expect(exchangeRatesLink).toBeInTheDocument();
    });

    it('should navigate to correct routes when links are clicked', () => {
        render(<Navigation />);
        const currencyConverterLink = screen.getByText('Currency Converter');
        const exchangeRatesLink = screen.getByText('Exchange Rates');
        fireEvent.click(currencyConverterLink);
        fireEvent.click(exchangeRatesLink);
    });
});
