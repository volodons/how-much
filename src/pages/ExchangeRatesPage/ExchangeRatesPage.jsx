import CurrentCurrency from "../../components/CurrentCurrency/CurrentCurrency";
import ExchangeRates from "../../components/ExchangeRates/ExchangeRates";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Navigation from "../../components/Navigation/Navigation";
import Title from "../../components/Title/Title";

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
