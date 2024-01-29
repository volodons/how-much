import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Flag from "react-world-flags";

import { exchangeRatesActions } from "../ducks/exchangeRatesDuck";
import CURRENCIES from "../const/currencies";
import { COLORS } from "../const/styles";
import { MEDIA_QUERIES } from "../const/styles";

const StyledBox = styled(Box)`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    padding: 2rem;
    text-align: center;
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

const StyledTypography = styled(Typography)`
    margin-bottom: 2rem;
    color: ${COLORS.WHITE};
    text-decoration: underline;
    font-family: lobster, sans-serif;
    text-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    &:hover {
        text-shadow: 3px 3px 6px ${COLORS.BLACK_TRANSPARENT};
    }
    @media (max-width: ${MEDIA_QUERIES.XS}) {
        font-size: 2.5rem;
    }
`;

const StyledTextFiled = styled(TextField)`
    & .MuiOutlinedInput-root {
        &:hover fieldset {
            border-color: ${COLORS.WHITE};
        }
    }
    & .MuiAutocomplete-inputRoot {
        color: ${COLORS.WHITE};
    }
    & .MuiButtonBase-root {
        color: ${COLORS.WHITE};
    }
    & .MuiInputLabel-root {
        color: ${COLORS.WHITE};
        &:active {
            color: ${COLORS.WHITE};
        }
        &:focus {
            color: ${COLORS.WHITE};
        }
    }
    & .MuiOutlinedInput-notchedOutline {
        border-width: 2px;
        border-color: ${COLORS.WHITE};
        border-radius: 10px;
        &:active {
            border-color: ${COLORS.WHITE};
        }
        &:focus {
            border-color: ${COLORS.WHITE};
        }
    }
`;

const StyledFlag = styled(Flag)`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
`;

const CurrentCurrency = () => {
    const dispatch = useDispatch();
    const { baseCurrency } = useSelector((state) => state.exchangeRates);

    const handleChangeBaseCurrency = (currency) => {
        dispatch({
            type: exchangeRatesActions.SET_BASE_CURRENCY.type,
            payload: currency,
        });
    };

    return (
        <StyledBox>
            <StyledTypography variant="h2">Current Currency</StyledTypography>
            <Autocomplete
                value={baseCurrency || ""}
                options={CURRENCIES}
                getOptionLabel={(option) => option.currency || baseCurrency}
                renderInput={(params) => (
                    <StyledTextFiled {...params} label="Choose Your Currency" />
                )}
                renderOption={(props, option) => (
                    <Box component="li" {...props}>
                        <StyledFlag code={option.country} />
                        {option.currency}
                    </Box>
                )}
                onChange={(event, value) => handleChangeBaseCurrency(value)}
            />
        </StyledBox>
    );
};

export default CurrentCurrency;
