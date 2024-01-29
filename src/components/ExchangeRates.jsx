import { useDispatch, useSelector } from "react-redux";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Flag from "react-world-flags";

import { favoriteCurrenciesActions } from "../ducks/favoriteCurrenciesDuck";
import CURRENCIES from "../const/currencies";
import { COLORS } from "../const/styles";
import { MEDIA_QUERIES } from "../const/styles";

const StyledBox = styled(Box)`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    padding: 2rem;
    box-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    border-radius: 10px;
    background: linear-gradient(to right, ${COLORS.BLUE}, ${COLORS.PURPLE});
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        box-shadow: 4px 4px 8px ${COLORS.BLACK_LEAST_TRANSPARENT};
        transform: scale(1.02);
    }
    @media (max-width: ${MEDIA_QUERIES.L}) {
        width: 75%;
    }
    @media (max-width: ${MEDIA_QUERIES.S}) {
        width: 90%;
    }
    @media (max-width: ${MEDIA_QUERIES.XS}) {
        width: auto;
    }
`;

const StyledGrid = styled(Grid)`
    justify-content: space-between;
    align-items: center;
`;

const StyledTypographyHeading = styled(Typography)`
    margin-bottom: 2rem;
    text-align: center;
    color: ${COLORS.WHITE};
    text-decoration: underline;
    font-family: Lobster, sans-serif;
    text-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    &:hover {
        text-shadow: 3px 3px 6px ${COLORS.BLACK_TRANSPARENT};
    }
    @media (max-width: ${MEDIA_QUERIES.XS}) {
        font-size: 2.5rem;
    }
`;

const StyledTypographyText = styled(Typography)`
    font-size: 3rem;
    color: ${COLORS.WHITE};
    text-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    transition: color 0.3s ease-in-out;
    &:hover {
        text-shadow: 3px 3px 6px ${COLORS.BLACK_TRANSPARENT};
        opacity: 0.8;
    }
`;

const StyledButton = styled(Button)`
    &:hover {
        opacity: 0.8;
    }
`;

const StyledIcon = styled(StarOutlineIcon)`
    width: 3rem;
    height: 3rem;
    color: ${COLORS.YELLOW};
`;

const StyledFlag = styled(Flag)`
    width: 6rem;
    border-radius: 5px;
    box-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    transition: color 0.3s ease-in-out;
    &:hover {
        box-shadow: 3px 3px 6px ${COLORS.BLACK_TRANSPARENT};
        opacity: 0.8;
    }
`;

const ExchangeRates = () => {
    const dispatch = useDispatch();
    const { favoriteCurrencies } = useSelector(
        (state) => state.favoriteCurrencies
    );

    const handleAddToFavorites = (currency) => {
        dispatch({
            type: favoriteCurrenciesActions.ADD_TO_FAVORITES.type,
            payload: currency,
        });
    };

    const handleRemoveFromFavorites = (currency) => {
        dispatch({
            type: favoriteCurrenciesActions.REMOVE_FROM_FAVORITES.type,
            payload: currency,
        });
    };

    return (
        <StyledBox>
            <StyledTypographyHeading variant="h2">
                Exchange Rates
            </StyledTypographyHeading>
            <Grid container>
                {favoriteCurrencies.map((currency) => (
                    <StyledGrid container key={currency.id}>
                        <Grid item>
                            <StyledButton
                                onClick={() =>
                                    handleRemoveFromFavorites(currency)
                                }
                            >
                                <StyledIcon />
                            </StyledButton>
                        </Grid>
                        <Grid item>
                            <StyledFlag code={currency.country} />
                        </Grid>
                        <Grid item>
                            <StyledTypographyText>5</StyledTypographyText>
                        </Grid>
                    </StyledGrid>
                ))}
                {CURRENCIES.map((currency) => (
                    <StyledGrid container key={currency.id}>
                        <Grid item>
                            <StyledButton
                                onClick={() => handleAddToFavorites(currency)}
                            >
                                <StyledIcon />
                            </StyledButton>
                        </Grid>
                        <Grid item>
                            <StyledFlag code={currency.country} />
                        </Grid>
                        <Grid item>
                            <StyledTypographyText>5</StyledTypographyText>
                        </Grid>
                    </StyledGrid>
                ))}
            </Grid>
        </StyledBox>
    );
};

export default ExchangeRates;
