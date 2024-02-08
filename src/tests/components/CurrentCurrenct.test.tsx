import {
    render,
    fireEvent,
    waitFor,
    screen,
    act,
} from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../redux';
import CurrentCurrency from '../../components/CurrentCurrency';

describe('CurrentCurrency component', () => {
    it('should render Current Currency heading', async () => {
        render(
            <Provider store={store}>
                <CurrentCurrency />
            </Provider>
        );
        await waitFor(() => {
            expect(screen.getByText('Current Currency')).toBeInTheDocument();
        });
    });

    it('should dispatch action to fetch base currency on mount', async () => {
        render(
            <Provider store={store}>
                <CurrentCurrency />
            </Provider>
        );
    });

    it('should dispatch action to set base currency when autocomplete option is selected', async () => {
        render(
            <Provider store={store}>
                <CurrentCurrency />
            </Provider>
        );
        const autocompleteInput = screen.getByRole('combobox');
        fireEvent.change(autocompleteInput, { target: { value: 'USD' } });
    });

    it('should dispatch action to fetch exchange rates when Fetch Rates button is clicked', async () => {
        render(
            <Provider store={store}>
                <CurrentCurrency />
            </Provider>
        );
        const fetchRatesButton = screen.getByText('Fetch Rates');
        act(() => {
            fireEvent.click(fetchRatesButton);
        });
    });

    it('should validate the base currency field when submitting with an empty value', async () => {
        render(
            <Provider store={store}>
                <CurrentCurrency />
            </Provider>
        );
        const fetchRatesButton = screen.getByText('Fetch Rates');
        act(() => {
            fireEvent.click(fetchRatesButton);
        });
        await waitFor(() => {
            expect(
                screen.getByText('This field is required')
            ).toBeInTheDocument();
        });
    });
});
