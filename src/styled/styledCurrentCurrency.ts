import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Form } from 'formik';

import { COLORS, MEDIA_QUERIES } from '../styles';

export const StyledBox = styled(Box)`
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

export const StyledTypography = styled(Typography)`
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

export const StyledTypographyButton = styled(Typography)`
    font-size: 1.25rem;
    font-weight: bold;
`;

export const StyledForm = styled(Form)`
    color: ${COLORS.RED};
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
    margin-top: 2rem;
    gap: 0.5rem;
    color: ${COLORS.WHITE};
    border: 2px solid ${COLORS.WHITE};
    border-radius: 10px;
    box-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    &:hover {
        box-shadow: 3px 3px 6px ${COLORS.BLACK_TRANSPARENT};
    }
`;

export const StyledPriceChangeIcon = styled(PriceChangeIcon)`
    font-size: 2rem;
    color: ${COLORS.WHITE};
`;
