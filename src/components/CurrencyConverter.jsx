import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { exchangeRatesActions } from '../ducks/exchangeRatesDuck';
import CURRENCIES from '../const/currencies';
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
    StyledFlag,
    StyledCurrencyExchangeIcon,
} from '../styled/styledCurrencyConverter';

const CurrencyConverter = () => {
    const dispatch = useDispatch();
    const {
        amountBeforeConversion,
        amountAfterConversion,
        baseCurrency,
        targetCurrency,
    } = useSelector((state) => state.exchangeRates);

    const handleChangeAmountBeforeConversion = (amount) => {
        dispatch({
            type: exchangeRatesActions.SET_AMOUNT_BEFORE_CONVERSION.type,
            payload: parseFloat(amount),
        });
    };

    const handleChangeBaseCurrency = (currency) => {
        dispatch({
            type: exchangeRatesActions.SET_BASE_CURRENCY.type,
            payload: currency,
        });
    };

    const handleChangeTargetCurrency = (currency) => {
        dispatch({
            type: exchangeRatesActions.SET_TARGET_CURRENCY.type,
            payload: currency,
        });
    };

    const handleConvertCurrency = () => {
        dispatch({ type: exchangeRatesActions.FETCH_EXCHANGE_RATES.type });
    };

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
                                value={amountBeforeConversion || ''}
                                onChange={(event) =>
                                    handleChangeAmountBeforeConversion(
                                        event.target.value
                                    )
                                }
                            />
                        </StyledGridItem>
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            value={baseCurrency || ''}
                            options={CURRENCIES}
                            getOptionLabel={(option) =>
                                option.currency || baseCurrency
                            }
                            renderInput={(params) => (
                                <StyledTextFiled
                                    {...params}
                                    label="Choose Currency To Convert"
                                    required
                                />
                            )}
                            renderOption={(props, option) => (
                                <Box component="li" {...props}>
                                    <StyledFlag code={option.country} />
                                    {option.currency}
                                </Box>
                            )}
                            onChange={(event, value) =>
                                handleChangeBaseCurrency(value.currency)
                            }
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            value={targetCurrency || ''}
                            options={CURRENCIES}
                            getOptionLabel={(option) =>
                                option.currency || targetCurrency
                            }
                            renderInput={(params) => (
                                <StyledTextFiled
                                    {...params}
                                    label="Choose Currency To Convert Into"
                                    required
                                />
                            )}
                            renderOption={(props, option) => (
                                <Box component="li" {...props}>
                                    <StyledFlag code={option.country} />
                                    {option.currency}
                                </Box>
                            )}
                            onChange={(event, value) =>
                                handleChangeTargetCurrency(value.currency)
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
                            value={amountAfterConversion || ''}
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
