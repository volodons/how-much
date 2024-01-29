import CurrentCurrency from "../components/CurrentCurrency";
import ExchangeRates from "../components/ExchangeRates";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Navigation from "../components/Navigation";
import Title from "../components/Title";

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
