import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

import { exchangeRatesActions } from '../ducks/exchangeRatesDuck';
import CURRENCIES from '../const/currencies';
import {
    StyledBox,
    StyledTypography,
    StyledTextField,
    StyledFlag,
} from '../styled/styledCurrentCurrency';

const CurrentCurrency = () => {
    const dispatch = useDispatch();
    const { baseCurrency } = useSelector((state) => state.exchangeRates);

    const handleChangeBaseCurrency = (currency) => {
        dispatch({
            type: exchangeRatesActions.SET_BASE_CURRENCY.type,
            payload: currency,
        });
    };

    return (
        <StyledBox>
            <StyledTypography variant="h2">Current Currency</StyledTypography>
            <Autocomplete
                value={baseCurrency || ''}
                options={CURRENCIES}
                getOptionLabel={(option) => option.currency || baseCurrency}
                renderInput={(params) => (
                    <StyledTextField {...params} label="Choose Your Currency" />
                )}
                renderOption={(props, option) => (
                    <Box component="li" {...props}>
                        <StyledFlag code={option.country} />
                        {option.currency}
                    </Box>
                )}
                onChange={(event, value) => handleChangeBaseCurrency(value)}
            />
        </StyledBox>
    );
};

export default CurrentCurrency;
