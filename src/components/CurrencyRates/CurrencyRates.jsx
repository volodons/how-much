import { Box, Grid, Typography, styled } from "@mui/material";
import Flag from "react-world-flags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import "typeface-lobster";

const StyledBox = styled(Box)`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    padding: 2rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: linear-gradient(to right, #0390fc, #8c0dfc);
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
    color: #ffffff;
    text-decoration: underline;
    font-family: Lobster, sans-serif;
`;

const StyledTypographyText = styled(Typography)`
    font-size: 3rem;
    color: #ffffff;
    transition: color 0.3s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;

const StyledIcon = styled(FontAwesomeIcon)`
    width: 3rem;
    height: 3rem;
    color: #ffd700;
    &:hover {
        opacity: 0.8;
    }
`;

const StyledFlag = styled(Flag)`
    transition: color 0.3s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;

const CurrencyRates = () => {
    return (
        <StyledBox>
            <StyledTypographyHeading variant="h2">
                Currency Rates
            </StyledTypographyHeading>
            <Grid container>
                <StyledGrid container>
                    <Grid item>
                        <Grid container alignItems="center" columnGap="3rem">
                            <StyledIcon icon={faStar} />
                            <StyledFlag code="USA" height="96" width="96" />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>5</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <Grid container alignItems="center" columnGap="3rem">
                            <StyledIcon icon={faStar} />
                            <StyledFlag code="EU" height="96" width="96" />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>10</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <Grid container alignItems="center" columnGap="3rem">
                            <StyledIcon icon={faStar} />
                            <StyledFlag code="JPN" height="96" width="96" />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>15</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <Grid container alignItems="center" columnGap="3rem">
                            <StyledIcon icon={faStar} />
                            <StyledFlag code="GBR" height="96" width="96" />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>20</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <Grid container alignItems="center" columnGap="3rem">
                            <StyledIcon icon={faStar} />
                            <StyledFlag code="CHN" height="96" width="96" />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>25</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <Grid container alignItems="center" columnGap="3rem">
                            <StyledIcon icon={faStar} />
                            <StyledFlag code="AUS" height="96" width="96" />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>30</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <Grid container alignItems="center" columnGap="3rem">
                            <StyledIcon icon={faStar} />
                            <StyledFlag code="CAN" height="96" width="96" />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>35</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <Grid container alignItems="center" columnGap="3rem">
                            <StyledIcon icon={faStar} />
                            <StyledFlag code="CHE" height="96" width="96" />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>40</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <Grid container alignItems="center" columnGap="3rem">
                            <StyledIcon icon={faStar} />
                            <StyledFlag code="POL" height="96" width="96" />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>45</StyledTypographyText>
                    </Grid>
                </StyledGrid>
                <StyledGrid container>
                    <Grid item>
                        <Grid container alignItems="center" columnGap="3rem">
                            <StyledIcon icon={faStar} />
                            <StyledFlag code="ISR" height="96" width="96" />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <StyledTypographyText>50</StyledTypographyText>
                    </Grid>
                </StyledGrid>
            </Grid>
        </StyledBox>
    );
};

export default CurrencyRates;
