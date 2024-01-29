import { useDispatch, useSelector } from "react-redux";
import { exchangeRatesActions } from "../ducks/exchangeRatesDuck";
import CURRENCIES from "../const/currencies";
import Flag from "react-world-flags";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const StyledTypographyHeading = styled(Typography)`
    margin-bottom: 2rem;
    text-align: center;
    color: #f5f7ff;
    text-decoration: underline;
    font-family: Lobster, sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    &:hover {
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 600px) {
        font-size: 2.5rem;
    }
`;

const StyledTypographyButton = styled(Typography)`
    font-size: 1.25rem;
    font-weight: bold;
`;

const StyledBox = styled(Box)`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: linear-gradient(to right, #0390fc, #562fff);
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
        transform: scale(1.02);
    }
    @media (max-width: 900px) {
        width: 75%;
    }
    @media (max-width: 600px) {
        width: auto;
        max-width: 100%;
    }
`;

const StyledOuterGridContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
`;

const StyledInnerGridContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    column-gap: 5rem;
    row-gap: 1rem;
`;

const StyledGridItem = styled(Grid)`
    width: 100%;
`;

const StyledInput = styled(Input)`
    width: 100%;
    text-align: center;
    border-color: #f5f7ff;
    & .MuiInputBase-input {
        text-align: center;
        color: #ffffff;
    }
`;

const StyledTextFiled = styled(TextField)`
    & .MuiOutlinedInput-root {
        &:hover fieldset {
            border-color: #f5f7ff;
        }
    }
    & .MuiAutocomplete-inputRoot {
        color: #f5f7ff;
    }
    & .MuiButtonBase-root {
        color: #f5f7ff;
    }
    & .MuiInputLabel-root {
        color: #f5f7ff;
        &:active {
            color: #f5f7ff;
        }
        &:focus {
            color: #f5f7ff;
        }
    }
    & .MuiOutlinedInput-notchedOutline {
        border-width: 2px;
        border-color: #f5f7ff;
        border-radius: 10px;
        &:active {
            border-color: #f5f7ff;
        }
        &:focus {
            border-color: #f5f7ff;
        }
    }
`;

const StyledIconButton = styled(IconButton)`
    gap: 0.5rem;
    color: #f5f7ff;
    border: 2px solid #f5f7ff;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    &:hover {
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
    }
`;

const StyledFlag = styled(Flag)`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
`;

const StyledCurrencyExchangeIcon = styled(CurrencyExchangeIcon)`
    font-size: 2rem;
    color: #f5f7ff;
`;

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
                                value={amountBeforeConversion || ""}
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
                            value={baseCurrency || ""}
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
                            value={targetCurrency || ""}
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
                            value={amountAfterConversion || ""}
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
