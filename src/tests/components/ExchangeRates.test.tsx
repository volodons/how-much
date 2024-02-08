import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../redux';
import ExchangeRates from '../../components/ExchangeRates';

describe('ExchangeRates component', () => {
    it('should render Exchange Rates heading', () => {
        render(
            <Provider store={store}>
                <ExchangeRates />
            </Provider>
        );
        expect(screen.getByText('Exchange Rates')).toBeInTheDocument();
    });

    // it('should dispatch actions when star button is clicked', async () => {
    //     render(
    //         <Provider store={store}>
    //             <ExchangeRates />
    //         </Provider>
    //     );
    //     await waitFor(() => {
    //         expect(screen.getByTestId('star-icon-button')).toBeInTheDocument();
    //     });
    //     const starIconButton = screen.getByTestId('star-icon-button');
    //     fireEvent.click(starIconButton);
    // });

    // it('should load currencies and exchange rates on mount', async () => {
    //     render(
    //         <Provider store={store}>
    //             <ExchangeRates />
    //         </Provider>
    //     );
    //     await waitFor(() => {
    //         expect(screen.getByText(/USD/i)).toBeInTheDocument(); // Assuming USD is one of the currencies
    //     });
    // });
});
