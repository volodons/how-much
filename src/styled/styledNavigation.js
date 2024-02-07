import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

import { COLORS, MEDIA_QUERIES } from '../styles';

export const StyledOpenButton = styled(Button)`
    position: absolute;
    margin-top: 1.5rem;
    color: ${COLORS.WHITE};
    @media (max-width: ${MEDIA_QUERIES.XS}) {
        position: static;
        margin-top: 0;
    }
`;

export const StyledOpenButtonIcon = styled(MenuIcon)`
    font-size: 2rem;
`;

export const StyledCloseButton = styled(Button)`
    color: ${COLORS.WHITE};
`;

export const StyledCloseButtonIcon = styled(CloseIcon)`
    font-size: 2rem;
    color: ${COLORS.WHITE};
`;

export const StyledDrawer = styled(Drawer)`
    & .MuiDrawer-paper {
        padding: 1rem;
        background-color: ${COLORS.BLUE};
    }
`;

export const StyledButtonBox = styled(Box)`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
    all: unset;
`;

export const StyledListBox = styled(Box)`
    color: ${COLORS.WHITE};
`;

export const StyledListItemButton = styled(ListItemButton)`
    border: 2px solid ${COLORS.WHITE};
    border-radius: 10px;
    width: 280px;
`;

export const StyledListItemText = styled(ListItemText)`
    & .MuiListItemText-primary {
        font-weight: bold;
    }
`;

export const StyledCurrencyExchangeIcon = styled(CurrencyExchangeIcon)`
    font-size: 2rem;
    color: ${COLORS.WHITE};
`;

export const StyledPriceChangeIcon = styled(PriceChangeIcon)`
    font-size: 2rem;
    color: ${COLORS.WHITE};
`;
