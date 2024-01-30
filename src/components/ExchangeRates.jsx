import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import { favoriteCurrenciesActions } from '../ducks/favoriteCurrenciesDuck';
import CURRENCIES from '../const/currencies';
import {
    StyledBox,
    StyledGrid,
    StyledTypographyHeading,
    StyledTypographyText,
    StyledButton,
    StyledIcon,
    StyledFlag,
} from '../styled/styledExchangeRates';

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
