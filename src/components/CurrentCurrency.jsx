import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

import {
    StyledBox,
    StyledTypography,
    StyledTextField,
} from '../styled/styledCurrentCurrency';
import { currenciesActions } from '../redux/ducks/currenciesDuck';

const CurrentCurrency = () => {
    const dispatch = useDispatch();
    const allCurrencies = useSelector(
        (state) => state.currencies.allCurrencies
    );
    const baseCurrency = useSelector((state) => state.currencies.baseCurrency);

    const handleChangeSelectedCurrency = (currency) => {
        if (currency) {
            dispatch({
                type: currenciesActions.SET_BASE_CURRENCY.type,
                payload: currency.code,
            });
        } else {
            dispatch({
                type: currenciesActions.SET_BASE_CURRENCY.type,
                payload: '',
            });
        }
    };

    return (
        <StyledBox>
            <StyledTypography variant="h2">Current Currency</StyledTypography>
            <Autocomplete
                value={baseCurrency}
                options={allCurrencies}
                getOptionLabel={(option) => option.code || baseCurrency}
                renderInput={(params) => (
                    <StyledTextField {...params} label="Choose Your Currency" />
                )}
                renderOption={(props, option) => (
                    <Box component="li" {...props}>
                        {option.code}
                    </Box>
                )}
                onChange={(event, value) => handleChangeSelectedCurrency(value)}
            />
        </StyledBox>
    );
};

export default CurrentCurrency;
