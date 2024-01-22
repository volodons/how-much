import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import "typeface-lobster";

const StyledTypography = styled(Typography)`
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: #0390fc;
    background: linear-gradient(to right, #0390fc 0%, #8c0dfc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Lobster, sans-serif;
    font-size: 5rem;
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
