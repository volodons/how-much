import {
    render,
    fireEvent,
    waitFor,
    screen,
    act,
} from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../redux';
import CurrencyConverter from '../../components/CurrencyConverter';

describe('CurrencyConverter component', () => {
    it('should render Currency Converter heading', async () => {
        render(
            <Provider store={store}>
                <CurrencyConverter />
            </Provider>
        );
        await waitFor(() => {
            expect(screen.getByText('Currency Converter')).toBeInTheDocument();
        });
    });

    it('should dispatch action to fetch currencies and base currency on mount', async () => {
        render(
            <Provider store={store}>
                <CurrencyConverter />
            </Provider>
        );
        await waitFor(() => {
            expect(store.getActions()).toContainEqual(
                expect.objectContaining({
                    type: currenciesActions.FETCH_CURRENCIES.type,
                })
            );
            expect(store.getActions()).toContainEqual(
                expect.objectContaining({
                    type: currenciesActions.FETCH_BASE_CURRENCY.type,
                })
            );
        });
    });

    it('should validate base currency amount field when submitting with an empty value', async () => {
        render(
            <Provider store={store}>
                <CurrencyConverter />
            </Provider>
        );
        const convertButton = screen.getByText('Convert');
        act(() => {
            fireEvent.click(convertButton);
        });
        await waitFor(() => {
            expect(
                screen.getByText('This field is required')
            ).toBeInTheDocument();
        });
    });

    it('should convert currency when form is submitted with valid values', async () => {
        render(
            <Provider store={store}>
                <CurrencyConverter />
            </Provider>
        );
        const baseCurrencyAmountInput = screen.getByPlaceholderText(
            'Type in amount of currency to convert from'
        );
        fireEvent.change(baseCurrencyAmountInput, { target: { value: '10' } });
        const convertButton = screen.getByText('Convert');
        act(() => {
            fireEvent.click(convertButton);
        });
        await waitFor(() => {
            expect(store.getActions()).toContainEqual(
                expect.objectContaining({
                    type: converterActions.SET_BASE_CURRENCY_AMOUNT.type,
                    payload: 10,
                })
            );
        });
    });

    it('should update target currency amount field with the converted value', async () => {
        render(
            <Provider store={store}>
                <CurrencyConverter />
            </Provider>
        );
        const baseCurrencyAmountInput = screen.getByPlaceholderText(
            'Type in amount of currency to convert from'
        );
        fireEvent.change(baseCurrencyAmountInput, { target: { value: '10' } });
        const convertButton = screen.getByText('Convert');
        act(() => {
            fireEvent.click(convertButton);
        });
        await waitFor(() => {
            expect(
                screen.getByPlaceholderText('Result').getAttribute('value')
            ).toBe('0');
        });
    });
});
