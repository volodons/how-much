import Typography from "@mui/material/Typography";
import styled from "styled-components";

const Title = () => {
    const StyledTypography = styled("h1")({
        color: "#1976d2",
    });

    return <StyledTypography>Hello World!</StyledTypography>;
};

export default Title;
