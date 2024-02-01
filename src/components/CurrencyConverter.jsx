import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { converterActions } from '../redux/ducks/converterDuck';
import {
    StyledTypographyHeading,
    StyledTypographyButton,
    StyledBox,
    StyledOuterGridContainer,
    StyledInnerGridContainer,
    StyledGridItem,
    StyledInput,
    StyledTextFiled,
    StyledIconButton,
    StyledCurrencyExchangeIcon,
} from '../styled/styledCurrencyConverter';

const CurrencyConverter = () => {
    const dispatch = useDispatch();
    const {
        allCurrencies,
        baseCurrency,
        baseCurrencyAmount,
        targetCurrency,
        targetCurrencyAmount,
    } = useSelector((state) => state.converter);

    const handleChangeBaseCurrency = (currency) => {
        if (currency) {
            dispatch({
                type: converterActions.SET_BASE_CURRENCY.type,
                payload: currency.code,
            });
        } else {
            dispatch({
                type: converterActions.SET_BASE_CURRENCY.type,
                payload: '',
            });
        }
    };

    const handleChangeBaseCurrencyAmount = (amount) => {
        if (amount >= 0) {
            dispatch({
                type: converterActions.SET_BASE_CURRENCY_AMOUNT.type,
                payload: amount,
            });
        }
    };

    const handleChangeTargetCurrency = (currency) => {
        if (currency) {
            dispatch({
                type: converterActions.SET_TARGET_CURRENCY.type,
                payload: currency.code,
            });
        } else {
            dispatch({
                type: converterActions.SET_TARGET_CURRENCY.type,
                payload: '',
            });
        }
    };

    const handleConvertCurrency = () => {
        dispatch({
            type: converterActions.FETCH_EXCHANGE_RATE.type,
            payload: { baseCurrency, targetCurrency },
        });
    };

    useEffect(() => {
        dispatch({ type: converterActions.FETCH_ALL_CURRENCIES.type });
    }, []);

    return (
        <StyledBox>
            <StyledTypographyHeading variant="h2">
                Currency Converter
            </StyledTypographyHeading>
            <StyledOuterGridContainer container>
                <StyledInnerGridContainer container>
                    <Grid container>
                        <StyledGridItem item>
                            <StyledInput
                                placeholder="Type in number"
                                type="number"
                                required
                                value={baseCurrencyAmount}
                                onChange={(event) =>
                                    handleChangeBaseCurrencyAmount(
                                        event.target.value
                                    )
                                }
                            />
                        </StyledGridItem>
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            value={baseCurrency}
                            options={allCurrencies}
                            getOptionLabel={(option) =>
                                option.code || baseCurrency
                            }
                            renderInput={(params) => (
                                <StyledTextFiled
                                    {...params}
                                    label="Choose Currency To Convert From"
                                    required
                                />
                            )}
                            renderOption={(props, option) => (
                                <Box component="li" {...props}>
                                    {option.code}
                                </Box>
                            )}
                            onChange={(event, value) =>
                                handleChangeBaseCurrency(value)
                            }
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            value={targetCurrency}
                            options={allCurrencies}
                            getOptionLabel={(option) =>
                                option.code || targetCurrency
                            }
                            renderInput={(params) => (
                                <StyledTextFiled
                                    {...params}
                                    label="Choose Currency To Convert To"
                                    required
                                />
                            )}
                            renderOption={(props, option) => (
                                <Box component="li" {...props}>
                                    {option.code}
                                </Box>
                            )}
                            onChange={(event, value) =>
                                handleChangeTargetCurrency(value)
                            }
                        />
                    </Grid>
                </StyledInnerGridContainer>
                <StyledIconButton onClick={handleConvertCurrency}>
                    <StyledCurrencyExchangeIcon />
                    <StyledTypographyButton variant="button">
                        Convert
                    </StyledTypographyButton>
                </StyledIconButton>
                <StyledInnerGridContainer container>
                    <StyledGridItem item>
                        <StyledInput
                            value={targetCurrencyAmount}
                            placeholder="Result"
                            type="number"
                            readOnly
                        />
                    </StyledGridItem>
                </StyledInnerGridContainer>
            </StyledOuterGridContainer>
        </StyledBox>
    );
};

export default CurrencyConverter;
