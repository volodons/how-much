import CurrentCurrency from "../../components/CurrentCurrency/CurrentCurrency";
import ExchangeRates from "../../components/ExchangeRates/ExchangeRates";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

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
