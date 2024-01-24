import { Box, Grid, Typography, styled } from "@mui/material";
import Flag from "react-world-flags";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "typeface-lobster";

const StyledBox = styled(Box)`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    padding: 2rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: linear-gradient(to right, #0390fc, #562fff);
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        transform: scale(1.02);
    }
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
    }
`;

const StyledGrid = styled(Grid)`
    justify-content: space-between;
    align-items: center;
`;

const StyledTypographyHeading = styled(Typography)`
    margin-bottom: 1rem;
    text-align: center;
    color: #f5f7ff;
    text-decoration: underline;
    font-family: Lobster, sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    &:hover {
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
    }
`;

const StyledTypographyText = styled(Typography)`
    font-size: 3rem;
    color: #f5f7ff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    &:hover {
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
    }
    transition: color 0.3s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;

const StyledIcon = styled(StarOutlineIcon)`
    width: 3rem;
    height: 3rem;
    color: #ffd700;
    &:hover {
        opacity: 0.8;
    }
`;

const StyledFlag = styled(Flag)`
    width: 6rem;
    border-radius: 5px;
    transition: color 0.3s ease-in-out;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    &:hover {
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
        opacity: 0.8;
    }
`;

const ExchangeRates = () => {
    return (
        <StyledBox>
            <StyledTypographyHeading variant="h2">
                Exchange Rates
            </StyledTypographyHeading>
            <Grid container>
                <StyledGrid container>
                    <Grid item>
                        <StyledIcon />
                    </Grid>
                    <Grid item>
                        <StyledFlag code="USA" />
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>5</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <StyledIcon />
                    </Grid>
                    <Grid item>
                        <StyledFlag code="EU" />
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>10</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <StyledIcon />
                    </Grid>
                    <Grid item>
                        <StyledFlag code="JPN" />
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>15</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <StyledIcon />
                    </Grid>
                    <Grid item>
                        <StyledFlag code="GBR" />
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>20</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <StyledIcon />
                    </Grid>
                    <Grid item>
                        <StyledFlag code="CHN" />
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>25</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <StyledIcon />
                    </Grid>
                    <Grid item>
                        <StyledFlag code="AUS" />
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>30</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <StyledIcon />
                    </Grid>
                    <Grid item>
                        <StyledFlag code="CAN" />
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>35</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <StyledIcon />
                    </Grid>
                    <Grid item>
                        <StyledFlag code="CHE" />
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>40</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <StyledIcon />
                    </Grid>
                    <Grid item>
                        <StyledFlag code="POL" />
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>45</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <StyledIcon />
                    </Grid>
                    <Grid item>
                        <StyledFlag code="ISR" />
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>50</StyledTypographyText>
                    </Grid>
                </StyledGrid>
            </Grid>
        </StyledBox>
    );
};

export default ExchangeRates;
