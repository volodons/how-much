import {
    render,
    screen,
    fireEvent,
    act,
    waitFor,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Navigation from '../../components/Navigation';

describe('Navigation component', () => {
    it('should be a functional component', () => {
        expect(Navigation).toBeInstanceOf(Function);
    });

    it('should render without errors', () => {
        render(<Navigation />);
        const openButton = screen.getByTestId('open-button');
        expect(openButton).toBeInTheDocument();
    });

    it('should open the drawer when open button is clicked', () => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );
        const openButton = screen.getByTestId('open-button');

        act(() => {
            fireEvent.click(openButton);
        });

        const drawer = screen.getByTestId('drawer');
        expect(drawer).toBeInTheDocument();
    });

    it('should close the drawer when close button is clicked', async () => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );
        const openButton = screen.getByTestId('open-button');

        act(() => {
            fireEvent.click(openButton);
        });

        const drawer = screen.getByTestId('drawer');
        const closeButton = screen.getByTestId('close-button');

        act(() => {
            fireEvent.click(closeButton);
        });

        await waitFor(() => {
            expect(drawer).not.toBeInTheDocument();
        });
    });

    it('should display Currency Converter page navigation link', () => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );
        const openButton = screen.getByTestId('open-button');

        act(() => {
            fireEvent.click(openButton);
        });

        const currencyConverterLink = screen.getByTestId(
            'currency-converter-link'
        );

        expect(currencyConverterLink).toBeInTheDocument();
    });

    it('should display Exchange Rates page navigation link', () => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );
        const openButton = screen.getByTestId('open-button');

        act(() => {
            fireEvent.click(openButton);
        });

        const exchangeRatesLink = screen.getByTestId('exchange-rates-link');

        expect(exchangeRatesLink).toBeInTheDocument();
    });

    it('should navigate to correct routes when links are clicked', () => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );
        const openButton = screen.getByTestId('open-button');

        act(() => {
            fireEvent.click(openButton);
        });

        const currencyConverterLink = screen.getByText('Currency Converter');
        const exchangeRatesLink = screen.getByText('Exchange Rates');

        fireEvent.click(currencyConverterLink);
        fireEvent.click(exchangeRatesLink);
    });

    it('should match a snapshot', () => {
        const tree = renderer.create(<Navigation />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
