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

    const inputOrOption = Yup.lazy((value) => {
        if (typeof value === 'string' || typeof value === 'object') {
            return Yup.mixed().required('This field is required');
        }
        return Yup.string().typeError(
            'Value must be your input or one of suggested options in menu'
        );
    });

    return (
        <StyledBox data-testid="current-currency-component">
            <StyledTypography variant="h2">Current Currency</StyledTypography>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    let selectedCurrencyCode = '';
                    if (typeof values.baseCurrency === 'string') {
                        const selectedCurrency = currencies.find(
                            (currency) => currency.code === values.baseCurrency
                        );
                        selectedCurrencyCode = selectedCurrency
                            ? selectedCurrency.code
                            : '';
                    } else {
                        selectedCurrencyCode = (values.baseCurrency as Currency)
                            .code;
                    }
                    if (selectedCurrencyCode) {
                        handleChangeBaseCurrency(selectedCurrencyCode);
                    }
                }}
                validationSchema={Yup.object().shape({
                    baseCurrency: inputOrOption,
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
                                        option.code || baseCurrency || ''
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
                                        value: Currency | string | null
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
