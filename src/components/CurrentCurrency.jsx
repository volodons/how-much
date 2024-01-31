import { useState } from 'react';
import { useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

import {
    StyledBox,
    StyledTypography,
    StyledTextField,
} from '../styled/styledCurrentCurrency';

const CurrentCurrency = () => {
    const allCurrencies = useSelector(
        (state) => state.currencies.allCurrencies
    );
    const [selectedCurrency, setSelectedCurrency] = useState('');

    const handleChangeSelectedCurrency = (currency) => {
        setSelectedCurrency(currency);
    };

    const handleInputChange = (value) => {
        if (!value) {
            setSelectedCurrency('');
        }
    };

    return (
        <StyledBox>
            <StyledTypography variant="h2">Current Currency</StyledTypography>
            <Autocomplete
                value={selectedCurrency || ''}
                options={allCurrencies}
                getOptionLabel={(option) => option.currency || selectedCurrency}
                renderInput={(params) => (
                    <StyledTextField {...params} label="Choose Your Currency" />
                )}
                renderOption={(props, option) => (
                    <Box component="li" {...props}>
                        {option.currency}
                    </Box>
                )}
                onChange={(event, value) => handleChangeSelectedCurrency(value)}
                onInputChange={(event, value) => handleInputChange(value)}
            />
        </StyledBox>
    );
};

export default CurrentCurrency;
