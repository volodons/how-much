import { createGlobalStyle } from 'styled-components';

import 'typeface-lobster';
import { COLORS } from '../styles';

export const StyledApp = createGlobalStyle`
    html, body {
        background: linear-gradient(to right, ${COLORS.BLUE}, ${COLORS.PURPLE});
    }
`;
