import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { currenciesActions } from '../../redux/ducks/currenciesDuck';
import ExchangeRates from '../../components/ExchangeRates';

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
const mockState = (mockStore as any).getState();

describe('ExchangeRates component', () => {
    it('should be a functional component', () => {
        expect(ExchangeRates).toBeInstanceOf(Function);
    });

    it('should render Exchange Rates heading', () => {
        render(
            <Provider store={mockStore}>
                <ExchangeRates />
            </Provider>
        );
        expect(screen.getByText('Exchange Rates')).toBeInTheDocument();
    });

    it('should add currency to favorites when star button is clicked', async () => {
        const mockDispatch = jest.fn();
        mockStore.dispatch = mockDispatch;

        render(
            <Provider store={mockStore}>
                <ExchangeRates />
            </Provider>
        );

        const starButton = screen.getByTestId('star-button');

        fireEvent.click(starButton);

        await waitFor(() => {
            expect(mockDispatch).toHaveBeenCalledWith({
                type: currenciesActions.ADD_TO_FEATURED_CURRENCIES.type,
                payload: {
                    id: 2,
                    code: 'USD',
                    exchangeRate: 2,
                    featured: false,
                },
            });
        });
    });

    it('should load currencies on mount', async () => {
        const mockDispatch = jest.fn();
        mockStore.dispatch = mockDispatch;

        render(
            <Provider store={mockStore}>
                <ExchangeRates />
            </Provider>
        );

        await waitFor(() => {
            expect(mockDispatch).toHaveBeenCalledWith({
                type: currenciesActions.FETCH_CURRENCIES.type,
            });
        });
    });

    it('should load exchange rates on mount', async () => {
        const mockDispatch = jest.fn();
        mockStore.dispatch = mockDispatch;

        const { baseCurrency, currencyCodes } = mockState.currencies;

        render(
            <Provider store={mockStore}>
                <ExchangeRates />
            </Provider>
        );

        await waitFor(() => {
            expect(mockDispatch).toHaveBeenCalledWith({
                type: currenciesActions.FETCH_EXCHANGE_RATES.type,
                payload: { baseCurrency, currencyCodes },
            });
        });
    });

    it('should remove currency from favorites when star button is clicked', async () => {
        const mockDispatch = jest.fn();
        mockStore.dispatch = mockDispatch;

        render(
            <Provider store={mockStore}>
                <ExchangeRates />
            </Provider>
        );

        const unstarButton = screen.getByTestId('unstar-button');

        fireEvent.click(unstarButton);

        await waitFor(() => {
            expect(mockDispatch).toHaveBeenCalledWith({
                type: currenciesActions.REMOVE_FROM_FEATURED_CURRENCIES.type,
                payload: {
                    id: 1,
                    code: 'UAH',
                    exchangeRate: 1,
                    featured: true,
                },
            });
        });
    });

    it('should match a snapshot', () => {
        const tree = renderer
            .create(
                <Provider store={mockStore}>
                    <ExchangeRates />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
