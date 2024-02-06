import React from 'react';

import { CurrencyConverter, Navigation, Title } from '../components';

const CurrencyConverterPage: React.FC = () => (
    <>
        <Navigation />
        <Title />
        <CurrencyConverter />
    </>
);

export default CurrencyConverterPage;
