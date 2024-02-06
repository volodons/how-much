import React from 'react';

import Box from '@mui/material/Box';

import {
    CurrentCurrency,
    ExchangeRates,
    Navigation,
    Title,
} from '../components';

const ExchangeRatesPage: React.FC = () => (
    <>
        <Navigation />
        <Title />
        <Box>
            <CurrentCurrency />
            <ExchangeRates />
        </Box>
    </>
);

export default ExchangeRatesPage;
