import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import { currenciesActions } from '../redux/ducks/currenciesDuck';
import {
    StyledBox,
    StyledGrid,
    StyledTypographyHeading,
    StyledTypographyText,
    StyledButton,
    StyledStarIcon,
    StyledStarOutlineIcon,
    StyledFlag,
} from '../styled/styledExchangeRates';

const ExchangeRates = () => {
    const dispatch = useDispatch();
    const allCurrencies = useSelector(
        (state) => state.currencies.allCurrencies
    );
    const featuredCurrencies = useSelector(
        (state) => state.currencies.featuredCurrencies
    );

    const handleAddToFeaturedCurrencies = (currency) => {
        dispatch({
            type: currenciesActions.ADD_TO_FEATURED_CURRENCIES.type,
            payload: currency,
        });
    };

    const handleRemoveFromFeaturedCurrencies = (currency) => {
        dispatch({
            type: currenciesActions.REMOVE_FROM_FEATURED_CURRENCIES.type,
            payload: currency,
        });
    };

    useEffect(() => {
        dispatch(currenciesActions.FETCH_ALL_CURRENCIES());
    }, []);

    return (
        <StyledBox>
            <StyledTypographyHeading variant="h2">
                Exchange Rates
            </StyledTypographyHeading>
            <Grid container>
                {featuredCurrencies.map((currency) => (
                    <StyledGrid container key={currency.id}>
                        <Grid item>
                            <StyledButton
                                onClick={() =>
                                    handleRemoveFromFeaturedCurrencies(currency)
                                }
                            >
                                <StyledStarIcon />
                            </StyledButton>
                        </Grid>
                        <Grid item>
                            <StyledTypographyText>
                                {currency.exchangeRate} {currency.currency}{' '}
                                <StyledFlag code="UKR" />
                            </StyledTypographyText>
                        </Grid>
                    </StyledGrid>
                ))}
                {allCurrencies.map((currency) => (
                    <StyledGrid container key={currency.id}>
                        <Grid item>
                            <StyledButton
                                onClick={() =>
                                    handleAddToFeaturedCurrencies(currency)
                                }
                            >
                                <StyledStarOutlineIcon />
                            </StyledButton>
                        </Grid>
                        <Grid item>
                            <StyledTypographyText>
                                {currency.exchangeRate} {currency.currency}{' '}
                                <StyledFlag code="UKR" />
                            </StyledTypographyText>
                        </Grid>
                    </StyledGrid>
                ))}
            </Grid>
        </StyledBox>
    );
};

export default ExchangeRates;
