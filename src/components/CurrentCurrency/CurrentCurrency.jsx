import {
    Autocomplete,
    Box,
    TextField,
    Typography,
    styled,
} from "@mui/material";
import "typeface-lobster";
import CURRENCIES from "../const/currencies/currencies";

const CurrentCurrency = () => {
    const StyledBox = styled(Box)`
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
        padding: 2rem;
        text-align: center;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background: linear-gradient(to right, #0390fc, #8c0dfc);
        transition: transform 0.2s ease-in-out;
        &:hover {
            transform: scale(1.02);
        }
        transition: box-shadow 0.3s ease-in-out;
        &:hover {
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
        }
    `;

    const StyledTypography = styled(Typography)`
        margin-bottom: 1rem;
        color: #ffffff;
        text-decoration: underline;
        font-family: lobster, sans-serif;
    `;

    const renderInput = (params) => <TextField {...params} />;

    return (
        <StyledBox>
            <StyledTypography variant="h2">Current Currency</StyledTypography>
            <Typography sx={{ color: "#ffffff" }}>
                Your current currency is:
            </Typography>
            <Autocomplete
                options={CURRENCIES}
                defaultValue={CURRENCIES[0]}
                renderInput={renderInput}
            />
        </StyledBox>
    );
};

export default CurrentCurrency;
