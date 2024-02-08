import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { RootState } from '../redux';
import { currenciesActions } from '../redux/ducks/currenciesDuck';
import {
    StyledBox,
    StyledTypography,
    StyledTypographyButton,
    StyledForm,
    StyledTextField,
    StyledIconButton,
    StyledPriceChangeIcon,
} from '../styled/styledCurrentCurrency';

interface Currency {
    id: number;
    code: string;
    exchangeRate: number;
    featured: boolean;
}

interface Values {
    baseCurrency: string;
}

const CurrentCurrency: React.FC = () => {
    const dispatch = useDispatch();
    const { currencies, baseCurrency } = useSelector(
        (state: RootState) => state.currencies
    );

    const handleChangeBaseCurrency = (currency: string | null) => {
        if (currency) {
            dispatch({
                type: currenciesActions.SET_BASE_CURRENCY.type,
                payload: currency,
            });
        } else {
            dispatch({
                type: currenciesActions.SET_BASE_CURRENCY.type,
                payload: '',
            });
        }
    };

    useEffect(() => {
        dispatch({ type: currenciesActions.FETCH_BASE_CURRENCY.type });
    }, []);

    const initialValues: Values = {
        baseCurrency: baseCurrency || '',
    };

    return (
        <StyledBox>
            <StyledTypography variant="h2">Current Currency</StyledTypography>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    handleChangeBaseCurrency((values.baseCurrency as any).code);
                }}
                validationSchema={Yup.object().shape({
                    baseCurrency: Yup.object().required(
                        'This field is required'
                    ),
                })}
            >
                <StyledForm>
                    <Grid item>
                        <Field name="baseCurrency">
                            {({ field, form }: { field: any; form: any }) => (
                                <Autocomplete
                                    {...field}
                                    options={currencies}
                                    getOptionLabel={(option: Currency) =>
                                        option.code || ''
                                    }
                                    renderInput={(params) => (
                                        <StyledTextField
                                            {...params}
                                            label="Choose Your Currency"
                                        />
                                    )}
                                    renderOption={(props, option: Currency) => (
                                        <Box component="li" {...props}>
                                            {option.code}
                                        </Box>
                                    )}
                                    onChange={(
                                        event: React.ChangeEvent<{}>,
                                        value: Currency | null
                                    ) => {
                                        form.setFieldValue(
                                            'baseCurrency',
                                            value || ''
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
                            Fetch Rates
                        </StyledTypographyButton>
                    </StyledIconButton>
                </StyledForm>
            </Formik>
        </StyledBox>
    );
};

export default CurrentCurrency;
