import React from 'react';
import Box from '@mui/material/Box';

import { CurrencyConverter, Navigation, Title } from '../components';

const CurrencyConverterPage: React.FC = () => (
    <Box data-testid="currency-converter-page">
        <Navigation />
        <Title />
        <CurrencyConverter />
    </Box>
);

export default CurrencyConverterPage;
