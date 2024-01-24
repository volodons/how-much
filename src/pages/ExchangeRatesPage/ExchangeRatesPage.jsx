import CurrentCurrency from "../../components/CurrentCurrency/CurrentCurrency";
import ExchangeRates from "../../components/ExchangeRates/ExchangeRates";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExchangeRatesPage = () => {
    return (
        <StyledBox>
            <CurrentCurrency />
            <ExchangeRates />
        </StyledBox>
    );
};

export default ExchangeRatesPage;
