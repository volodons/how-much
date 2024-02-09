import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../../redux';
import ExchangeRatesPage from '../../pages/ExchangeRatesPage';

describe('ExchangeRatesPage component', () => {
    it('should be a functional component', () => {
        expect(ExchangeRatesPage).toBeInstanceOf(Function);
    });

    it('should render Navigation component', () => {
        render(
            <Provider store={store}>
                <ExchangeRatesPage />
            </Provider>
        );
        const navigationComponent = screen.getByTestId('navigation-component');
        expect(navigationComponent).toBeInTheDocument();
    });

    it('should render Title component', () => {
        render(
            <Provider store={store}>
                <ExchangeRatesPage />
            </Provider>
        );
        const titleComponent = screen.getByTestId('title-component');
        expect(titleComponent).toBeInTheDocument();
    });

    it('should render CurrentCurrency component', () => {
        render(
            <Provider store={store}>
                <ExchangeRatesPage />
            </Provider>
        );
        const currentCurrencyComponent = screen.getByTestId(
            'current-currency-component'
        );
        expect(currentCurrencyComponent).toBeInTheDocument();
    });

    it('should render ExchangeRates component', () => {
        render(
            <Provider store={store}>
                <ExchangeRatesPage />
            </Provider>
        );
        const exchangeRatesComponent = screen.getByTestId(
            'exchange-rates-component'
        );
        expect(exchangeRatesComponent).toBeInTheDocument();
    });

    it('should match a snapshot', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <ExchangeRatesPage />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
