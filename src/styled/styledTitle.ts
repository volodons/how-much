import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { COLORS, MEDIA_QUERIES } from '../styles';

export const StyledTypography = styled(Typography)`
    margin-bottom: 2rem;
    color: ${COLORS.WHITE};
    font-family: Lobster, sans-serif;
    font-size: 5.625rem;
    text-align: center;
    text-shadow: 2px 2px 4px ${COLORS.BLACK_MOST_TRANSPARENT};
    &:hover {
        text-shadow: 3px 3px 6px ${COLORS.BLACK_TRANSPARENT};
    }
    @media (max-width: ${MEDIA_QUERIES.XS}) {
        font-size: 4rem;
    }
`;
