import { render, screen } from '@testing-library/react';
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

    it('should navigate to Exchange Rates page when the corresponding route is accessed', () => {});
});
