import {
    Autocomplete,
    Box,
    TextField,
    Typography,
    styled,
} from "@mui/material";
import "typeface-lobster";
import CURRENCIES from "../../const/currencies/currencies";

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
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
    }
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
    }
`;

const StyledTypography = styled(Typography)`
    margin-bottom: 1rem;
    color: #f5f7ff;
    text-decoration: underline;
    font-family: lobster, sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    &:hover {
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
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

const CurrentCurrency = () => {
    return (
        <StyledBox>
            <StyledTypography variant="h2">Current Currency</StyledTypography>
            <Typography sx={{ color: "#ffffff" }}>
                Your current currency is:
            </Typography>
            <Autocomplete
                defaultValue={CURRENCIES[0]}
                options={CURRENCIES}
                renderInput={(params) => (
                    <StyledTextFiled {...params} label="Choose Your Currency" />
                )}
            />
        </StyledBox>
    );
};

export default CurrentCurrency;
