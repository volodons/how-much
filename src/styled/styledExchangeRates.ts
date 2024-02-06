import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { COLORS, MEDIA_QUERIES } from '../styles';

export const StyledBox = styled(Box)`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    padding: 2rem;
    box-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    border-radius: 10px;
    background: linear-gradient(to right, ${COLORS.BLUE}, ${COLORS.PURPLE});
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        box-shadow: 4px 4px 8px ${COLORS.BLACK_LEAST_TRANSPARENT};
        transform: scale(1.001);
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

export const StyledGrid = styled(Grid)`
    justify-content: space-between;
    align-items: center;
`;

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

export const StyledTypographyText = styled(Typography)`
    font-size: 3rem;
    color: ${COLORS.WHITE};
    text-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    transition: color 0.3s ease-in-out;
    &:hover {
        text-shadow: 3px 3px 6px ${COLORS.BLACK_TRANSPARENT};
        opacity: 0.8;
    }
`;

export const StyledButton = styled(Button)`
    &:hover {
        opacity: 0.8;
    }
`;

export const StyledStarIcon = styled(StarIcon)`
    width: 3rem;
    height: 3rem;
    color: ${COLORS.GOLD};
`;

export const StyledStarOutlineIcon = styled(StarOutlineIcon)`
    width: 3rem;
    height: 3rem;
    color: ${COLORS.GOLD};
`;
