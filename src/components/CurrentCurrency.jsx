import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
    StyledBox,
    StyledTypography,
    StyledTypographyButton,
    StyledTextField,
    StyledIconButton,
    StyledPriceChangeIcon,
} from '../styled/styledCurrentCurrency';
import { currenciesActions } from '../redux/ducks/currenciesDuck';

const CurrentCurrency = () => {
    const dispatch = useDispatch();
    const { allCurrencies } = useSelector((state) => state.currencies);

    const handleChangeBaseCurrency = (currency) => {
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
            <Formik
                initialValues={{ baseCurrency: '' }}
                onSubmit={(values) => {
                    handleChangeBaseCurrency(values.baseCurrency);
                }}
                validationSchema={Yup.object().shape({
                    baseCurrency: Yup.object().required(
                        'This field is required'
                    ),
                })}
            >
                <Form>
                    <Grid item>
                        <Field name="baseCurrency">
                            {({ field, form }) => (
                                <Autocomplete
                                    {...field}
                                    options={allCurrencies}
                                    getOptionLabel={(option) =>
                                        option.code || ''
                                    }
                                    renderInput={(params) => (
                                        <StyledTextField
                                            {...params}
                                            label="Choose Your Currency"
                                        />
                                    )}
                                    renderOption={(props, option) => (
                                        <Box component="li" {...props}>
                                            {option.code}
                                        </Box>
                                    )}
                                    onChange={(event, value) => {
                                        form.setFieldValue(
                                            'baseCurrency',
                                            value
                                        );
                                    }}
                                />
                            )}
                        </Field>
                        <ErrorMessage name="baseCurrency" />
                    </Grid>
                    <StyledIconButton type="submit">
                        <StyledPriceChangeIcon />
                        <StyledTypographyButton variant="button">
                            Set
                        </StyledTypographyButton>
                    </StyledIconButton>
                </Form>
            </Formik>
        </StyledBox>
    );
};

export default CurrentCurrency;
