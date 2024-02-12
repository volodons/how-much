import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CurrencyConverterPage from './pages/CurrencyConverterPage';
import ExchangeRatesPage from './pages/ExchangeRatesPage';

import store from './redux';
import { StyledApp } from './styled/styledApp';

const App: React.FC = () => (
    <>
        <Provider store={store}>
            <StyledApp />
            <Router>
                <Routes>
                    <Route path="/" element={<CurrencyConverterPage />} />
                    <Route path="/rates" element={<ExchangeRatesPage />} />
                </Routes>
            </Router>
        </Provider>
    </>
);

export default App;
