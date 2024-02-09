import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../../redux';
import CurrencyConverterPage from '../../pages/CurrencyConverterPage';

describe('CurrencyConverterPage component', () => {
    it('should be a functional component', () => {
        expect(CurrencyConverterPage).toBeInstanceOf(Function);
    });

    it('should render Navigation component', () => {
        render(
            <Provider store={store}>
                <CurrencyConverterPage />
            </Provider>
        );
        const navigationComponent = screen.getByTestId('navigation-component');
        expect(navigationComponent).toBeInTheDocument();
    });

    it('should render Title component', () => {
        render(
            <Provider store={store}>
                <CurrencyConverterPage />
            </Provider>
        );
        const titleComponent = screen.getByTestId('title-component');
        expect(titleComponent).toBeInTheDocument();
    });

    it('should render CurrencyConverter component', () => {
        render(
            <Provider store={store}>
                <CurrencyConverterPage />
            </Provider>
        );
        const currencyConverterComponent = screen.getByTestId(
            'currency-converter-component'
        );
        expect(currencyConverterComponent).toBeInTheDocument();
    });

    it('should match a snapshot', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <CurrencyConverterPage />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
