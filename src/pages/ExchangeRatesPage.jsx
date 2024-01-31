import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import {
    CurrentCurrency,
    ExchangeRates,
    Navigation,
    Title,
} from '../components';

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExchangeRatesPage = () => (
    <>
        <Navigation />
        <Title />
        <StyledBox>
            <CurrentCurrency />
            <ExchangeRates />
        </StyledBox>
    </>
);

export default ExchangeRatesPage;
