import {
    render,
    fireEvent,
    waitFor,
    screen,
    act,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { currenciesActions } from '../../redux/ducks/currenciesDuck';
import { converterActions } from '../../redux/ducks/converterDuck';
import CurrencyConverter from '../../components/CurrencyConverter';

const createMockStore = configureMockStore();
const mockInitialState = {
    converter: {
        currencies: [],
        baseCurrency: { id: 1, code: 'UAH', exchangeRate: 1, featured: true },
        baseCurrencyAmount: 0,
        targetCurrency: '',
        targetCurrencyAmount: 0,
        exchangeRate: 0,
        error: null,
    },
    currencies: {
        currencies: [
            { id: 1, code: 'UAH', exchangeRate: 1, featured: true },
            { id: 2, code: 'USD', exchangeRate: 2, featured: false },
        ],
        currencyCodes: ['EUR', 'CAD'],
        baseCurrency: { id: 1, code: 'UAH', exchangeRate: 1, featured: true },
        error: null,
    },
};
const mockStore = createMockStore(mockInitialState);

describe('CurrencyConverter component', () => {
    it('should be a functional component', () => {
        expect(CurrencyConverter).toBeInstanceOf(Function);
    });

    it('should render Currency Converter heading', async () => {
        render(
            <Provider store={mockStore}>
                <CurrencyConverter />
            </Provider>
        );

        await waitFor(() => {
            expect(screen.getByText('Currency Converter')).toBeInTheDocument();
        });
    });

    it('should dispatch action to fetch currencies and base currency on mount', async () => {
        const mockDispatch = jest.fn();
        mockStore.dispatch = mockDispatch;

        render(
            <Provider store={mockStore}>
                <CurrencyConverter />
            </Provider>
        );

        await waitFor(() => {
            expect(mockDispatch).toHaveBeenCalledWith(
                expect.objectContaining({
                    type: converterActions.FETCH_CURRENCIES.type,
                })
            );
        });

        await waitFor(() => {
            expect(mockDispatch).toHaveBeenCalledWith(
                expect.objectContaining({
                    type: currenciesActions.FETCH_BASE_CURRENCY.type,
                })
            );
        });
    });

    it('should validate base currency amount field when submitting with an empty value', async () => {
        render(
            <Provider store={mockStore}>
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

    it('should update target currency amount field with the converted value', async () => {
        render(
            <Provider store={mockStore}>
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

    it('should match a snapshot', () => {
        const tree = renderer
            .create(
                <Provider store={mockStore}>
                    <CurrencyConverter />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
