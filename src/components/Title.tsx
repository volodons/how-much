import React from 'react';

import { StyledTypography } from '../styled/styledTitle';

const Title: React.FC = () => (
    <StyledTypography variant="h1" data-testid="title-component">
        How Much?
    </StyledTypography>
);

export default Title;
