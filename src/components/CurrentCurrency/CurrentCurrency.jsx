import CURRENCIES from "../../const/currencies/currencies";
import Flag from "react-world-flags";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const StyledBox = styled(Box)`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    padding: 2rem;
    text-align: center;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: linear-gradient(to right, #0390fc, #562fff);
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
        transform: scale(1.02);
    }
    @media (max-width: 1000px) {
        width: 75%;
    }
    @media (max-width: 800px) {
        width: 90%;
    }
    @media (max-width: 600px) {
        width: auto;
    }
`;

const StyledTypography = styled(Typography)`
    margin-bottom: 2rem;
    color: #f5f7ff;
    text-decoration: underline;
    font-family: lobster, sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    &:hover {
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 600px) {
        font-size: 2.5rem;
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

const StyledFlag = styled(Flag)`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
`;

const CurrentCurrency = () => {
    return (
        <StyledBox>
            <StyledTypography variant="h2">Current Currency</StyledTypography>
            <Autocomplete
                defaultValue={CURRENCIES[0].currency}
                options={CURRENCIES}
                getOptionLabel={(option) =>
                    option.currency || CURRENCIES[0].currency
                }
                renderInput={(params) => (
                    <StyledTextFiled {...params} label="Choose Your Currency" />
                )}
                renderOption={(props, option) => (
                    <Box component="li" {...props}>
                        <StyledFlag code={option.country} />
                        {option.currency}
                    </Box>
                )}
            />
        </StyledBox>
    );
};

export default CurrentCurrency;
