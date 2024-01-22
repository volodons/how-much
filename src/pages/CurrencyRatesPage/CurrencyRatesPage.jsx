import CurrentCurrency from "../../components/CurrentCurrency/CurrentCurrency";
import CurrencyRates from "../../components/CurrencyRates/CurrencyRates";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CurrencyRatesPage = () => {
    return (
        <StyledBox>
            <CurrentCurrency />
            <CurrencyRates />
        </StyledBox>
    );
};

export default CurrencyRatesPage;
