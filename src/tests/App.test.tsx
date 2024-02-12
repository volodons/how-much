import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../redux';
import App from '../App';

describe('App Component', () => {
    it('should render Currency Converter page by default', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(
            screen.getByTestId('currency-converter-page')
        ).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <App />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
