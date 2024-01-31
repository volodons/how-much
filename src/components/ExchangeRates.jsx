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

const ExchangeRates = () => {
    const dispatch = useDispatch();
    const allCurrencyCodes = useSelector(
        (state) => state.currencies.allCurrencyCodes
    );
    const allCurrencies = useSelector(
        (state) => state.currencies.allCurrencies
    );
    const baseCurrency = useSelector((state) => state.currencies.baseCurrency);

    const handleAddToFeaturedCurrencies = (currency) => {
        dispatch({
            type: currenciesActions.ADD_TO_FEATURED.type,
            payload: currency,
        });
    };

    const handleRemoveFromFeaturedCurrencies = (currency) => {
        dispatch({
            type: currenciesActions.REMOVE_FROM_FEATURED.type,
            payload: currency,
        });
    };

    useEffect(() => {
        dispatch({ type: currenciesActions.FETCH_ALL_CURRENCIES.type });
    }, []);

    useEffect(() => {
        dispatch({
            type: currenciesActions.FETCH_EXCHANGE_RATES.type,
            payload: { baseCurrency, allCurrencyCodes },
        });
    }, [baseCurrency]);

    return (
        <StyledBox>
            <StyledTypographyHeading variant="h2">
                Exchange Rates
            </StyledTypographyHeading>
            <Grid container>
                {baseCurrency &&
                    allCurrencies.map((currency) =>
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
                    allCurrencies.map((currency) =>
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
