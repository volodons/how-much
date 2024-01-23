import CURRENCIES from "../../const/currencies/currencies";
import {
    Autocomplete,
    Box,
    Grid,
    IconButton,
    Input,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

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
        transform: scale(1.02);
    }
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
    }
`;

const StyledOuterGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
`;

const StyledGrid = styled(Grid)`
    display: flex;
    column-gap: 5rem;
`;

const StyledGridItem = styled(Grid)`
    width: 100%;
`;

const StyledInput = styled(Input)`
    width: 100%;
    text-align: center;
    border-color: #f5f7ff;
    &:hover {
        border-color: #f5f7ff;
    }
    & .MuiInputBase-root-MuiInput-root:hover:not {
        border-color: #f5f7ff;
        &:hover {
            border-bottom-color: #f5f7ff;
        }
    }
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

const CurrencyConverter = () => {
    return (
        <StyledBox>
            <StyledTypographyHeading variant="h2">
                Currency Converter
            </StyledTypographyHeading>
            <StyledOuterGrid container>
                <StyledGrid
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    rowGap="1rem"
                >
                    <Grid container justifyContent="center">
                        <StyledGridItem item>
                            <StyledInput
                                placeholder="Type in number"
                                type="number"
                                required
                            />
                        </StyledGridItem>
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            defaultValue="UAH"
                            options={CURRENCIES}
                            renderInput={(params) => (
                                <StyledTextFiled
                                    {...params}
                                    label="Choose Currency To Convert"
                                    required
                                />
                            )}
                            sx={{ flexGrow: "1" }}
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            defaultValue="UAH"
                            options={CURRENCIES}
                            renderInput={(params) => (
                                <StyledTextFiled
                                    {...params}
                                    label="Choose Currency To Convert Into"
                                    required
                                />
                            )}
                        />
                    </Grid>
                </StyledGrid>
                <StyledIconButton>
                    <CurrencyExchangeIcon
                        sx={{ fontSize: "2rem", color: "#f5f7ff" }}
                    />
                    <StyledTypographyButton variant="button">
                        Convert
                    </StyledTypographyButton>
                </StyledIconButton>
                <StyledGrid container justifyContent="center">
                    <StyledGridItem item>
                        <StyledInput
                            placeholder="Result"
                            type="number"
                            readOnly
                        />
                    </StyledGridItem>
                </StyledGrid>
            </StyledOuterGrid>
        </StyledBox>
    );
};

export default CurrencyConverter;
