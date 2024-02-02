import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { COLORS } from '../styles';
import { MEDIA_QUERIES } from '../styles';

export const StyledTypographyHeading = styled(Typography)`
    margin-bottom: 2rem;
    text-align: center;
    color: ${COLORS.WHITE};
    text-decoration: underline;
    font-family: Lobster, sans-serif;
    text-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    &:hover {
        text-shadow: 3px 3px 6px ${COLORS.BLACK_TRANSPARENT};
    }
    @media (max-width: ${MEDIA_QUERIES.XS}) {
        font-size: 2.5rem;
    }
`;

export const StyledTypographyButton = styled(Typography)`
    font-size: 1.25rem;
    font-weight: bold;
`;

export const StyledBox = styled(Box)`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    padding: 1rem;
    box-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    border-radius: 10px;
    background: linear-gradient(to right, ${COLORS.BLUE}, ${COLORS.PURPLE});
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        box-shadow: 4px 4px 8px ${COLORS.BLACK_LEAST_TRANSPARENT};
        transform: scale(1.02);
    }
    @media (max-width: ${MEDIA_QUERIES.M}) {
        width: 75%;
    }
    @media (max-width: ${MEDIA_QUERIES.XS}) {
        width: auto;
        max-width: 100%;
    }
`;

export const StyledOuterGridContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
`;

export const StyledInnerGridContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    column-gap: 5rem;
    row-gap: 1rem;
`;

export const StyledGridItem = styled(Grid)`
    width: 100%;
`;

export const StyledInput = styled(Input)`
    width: 100%;
    text-align: center;
    border-color: ${COLORS.WHITE};
    & .MuiInputBase-input {
        text-align: center;
        color: #ffffff;
    }
`;

export const StyledTextField = styled(TextField)`
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

export const StyledIconButton = styled(IconButton)`
    width: 50%;
    gap: 0.5rem;
    color: ${COLORS.WHITE};
    border: 2px solid ${COLORS.WHITE};
    border-radius: 10px;
    box-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    &:hover {
        box-shadow: 3px 3px 6px ${COLORS.BLACK_TRANSPARENT};
    }
`;

export const StyledCurrencyExchangeIcon = styled(CurrencyExchangeIcon)`
    font-size: 2rem;
    color: ${COLORS.WHITE};
`;
