import React from 'react';
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
} from '../styled/styledExchangeRates';

const ExchangeRates: React.FC = () => {
    const dispatch = useDispatch();
    const { currencyCodes, currencies, baseCurrency } = useSelector(
        (state) => state.currencies
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
        dispatch({ type: currenciesActions.FETCH_CURRENCIES.type });
    }, []);

    useEffect(() => {
        dispatch({
            type: currenciesActions.FETCH_EXCHANGE_RATES.type,
            payload: { baseCurrency, currencyCodes },
        });
    }, [baseCurrency]);

    return (
        <StyledBox>
            <StyledTypographyHeading variant="h2">
                Exchange Rates
            </StyledTypographyHeading>
            <Grid container>
                {baseCurrency &&
                    currencies.map((currency) =>
                        currency.featured ? (
                            <StyledGrid container key={currency.id}>
                                <Grid item>
                                    <StyledButton
                                        onClick={() =>
                                            handleRemoveFromFeaturedCurrencies(
                                                currency
                                            )
                                        }
                                    >
                                        <StyledStarIcon />
                                    </StyledButton>
                                </Grid>
                                <Grid item>
                                    <StyledTypographyText>
                                        {currency.exchangeRate} {currency.code}{' '}
                                    </StyledTypographyText>
                                </Grid>
                            </StyledGrid>
                        ) : null
                    )}
                {baseCurrency &&
                    currencies.map((currency) =>
                        !currency.featured ? (
                            <StyledGrid container key={currency.id}>
                                <Grid item>
                                    <StyledButton
                                        onClick={() =>
                                            handleAddToFeaturedCurrencies(
                                                currency
                                            )
                                        }
                                    >
                                        <StyledStarOutlineIcon />
                                    </StyledButton>
                                </Grid>
                                <Grid item>
                                    <StyledTypographyText>
                                        {currency.exchangeRate} {currency.code}{' '}
                                    </StyledTypographyText>
                                </Grid>
                            </StyledGrid>
                        ) : null
                    )}
            </Grid>
        </StyledBox>
    );
};

export default ExchangeRates;
