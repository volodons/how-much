import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import {
    CurrentCurrency,
    ExchangeRates,
    Navigation,
    Title,
} from '../components/index';

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExchangeRatesPage = () => {
    return (
        <>
            <Navigation />
            <Title />
            <StyledBox>
                <CurrentCurrency />
                <ExchangeRates />
            </StyledBox>
        </>
    );
};

export default ExchangeRatesPage;
