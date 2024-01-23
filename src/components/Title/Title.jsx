import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import "typeface-lobster";

const StyledTypography = styled(Typography)`
    margin-bottom: 2rem;
    color: #f5f7ff;
    font-family: Lobster, sans-serif;
    font-size: 5.625rem;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    &:hover {
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
    }
`;

const Title = () => {
    return <StyledTypography variant="h1">How Much?</StyledTypography>;
};

export default Title;
