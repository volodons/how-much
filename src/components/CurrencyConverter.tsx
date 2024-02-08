import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { RootState } from '../redux';
import { converterActions } from '../redux/ducks/converterDuck';
import { currenciesActions } from '../redux/ducks/currenciesDuck';
import {
    StyledCircularProgressBox,
    StyledCircularProgress,
    StyledTypographyHeading,
    StyledTypographyButton,
    StyledCurrencyConverterBox,
    StyledOuterGridContainer,
    StyledInnerGridContainer,
    StyledGridItem,
    StyledInput,
    StyledTextField,
    StyledIconButton,
    StyledCurrencyExchangeIcon,
} from '../styled/styledCurrencyConverter';

interface Currency {
    id: number;
    code: string;
    exchangeRate: number;
    featured: boolean;
}
interface Values {
    baseCurrency: Currency | string;
    baseCurrencyAmount: number;
    targetCurrency: Currency | string;
    targetCurrencyAmount: number;
}

const CurrencyConverter: React.FC = () => {
    const dispatch = useDispatch();
    const { currencies, targetCurrencyAmount } = useSelector(
        (state: RootState) => state.converter
    );
    const { baseCurrency } = useSelector(
        (state: RootState) => state.currencies
    );

    const handleConvertCurrency = (values: Values) => {
        dispatch({
            type: converterActions.FETCH_EXCHANGE_RATE.type,
            payload: {
                baseCurrency: (values.baseCurrency as Currency).code,
                targetCurrency: (values.targetCurrency as Currency).code,
            },
        });
    };

    useEffect(() => {
        dispatch({ type: converterActions.FETCH_CURRENCIES.type });
    }, []);

    useEffect(() => {
        dispatch({ type: currenciesActions.FETCH_BASE_CURRENCY.type });
    }, []);

    const initialValues: Values = {
        baseCurrency: baseCurrency || '',
        baseCurrencyAmount: 0,
        targetCurrency: '',
        targetCurrencyAmount: targetCurrencyAmount || 0,
    };

    return (
        <Box data-testid="currency-converter-component">
            {!currencies || !baseCurrency ? (
                <StyledCircularProgressBox>
                    <StyledCircularProgress size="5rem" />
                </StyledCircularProgressBox>
            ) : (
                <StyledCurrencyConverterBox>
                    <StyledTypographyHeading variant="h2">
                        Currency Converter
                    </StyledTypographyHeading>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            dispatch({
                                type: converterActions.SET_BASE_CURRENCY_AMOUNT
                                    .type,
                                payload: values.baseCurrencyAmount,
                            });
                            handleConvertCurrency(values);
                        }}
                        validationSchema={Yup.object().shape({
                            baseCurrencyAmount: Yup.number()
                                .min(
                                    0.1,
                                    'Number must be greater than or equal to 0.1'
                                )
                                .required('This field is required'),
                            baseCurrency: Yup.object().required(
                                'This field is required'
                            ),
                            targetCurrency: Yup.object().required(
                                'This field is required'
                            ),
                        })}
                    >
                        <Form>
                            <StyledOuterGridContainer container>
                                <StyledInnerGridContainer container>
                                    <Grid container>
                                        <StyledGridItem item>
                                            <Field
                                                as={StyledInput}
                                                type="number"
                                                name="baseCurrencyAmount"
                                                placeholder="Type in amount of currency to convert from"
                                            />
                                            <ErrorMessage name="baseCurrencyAmount" />
                                        </StyledGridItem>
                                    </Grid>
                                    <Grid item>
                                        <Field name="baseCurrency">
                                            {({
                                                field,
                                                form,
                                            }: {
                                                field: any;
                                                form: any;
                                            }) => (
                                                <Autocomplete
                                                    {...field}
                                                    options={currencies}
                                                    getOptionLabel={(
                                                        option: Currency
                                                    ) => option.code || ''}
                                                    renderInput={(params) => (
                                                        <StyledTextField
                                                            {...params}
                                                            label="Choose Currency To Convert From"
                                                        />
                                                    )}
                                                    renderOption={(
                                                        props,
                                                        option: Currency
                                                    ) => (
                                                        <Box
                                                            component="li"
                                                            {...props}
                                                        >
                                                            {option.code}
                                                        </Box>
                                                    )}
                                                    onChange={(
                                                        event: React.ChangeEvent<{}>,
                                                        value: Currency | null
                                                    ) => {
                                                        if (value) {
                                                            form.setFieldValue(
                                                                'baseCurrency',
                                                                value
                                                            );
                                                        } else {
                                                            form.setFieldValue(
                                                                'baseCurrency',
                                                                ''
                                                            );
                                                        }
                                                    }}
                                                />
                                            )}
                                        </Field>
                                        <ErrorMessage name="baseCurrency" />
                                    </Grid>
                                    <Grid item>
                                        <Field name="targetCurrency">
                                            {({
                                                field,
                                                form,
                                            }: {
                                                field: any;
                                                form: any;
                                            }) => (
                                                <Autocomplete
                                                    {...field}
                                                    options={currencies}
                                                    getOptionLabel={(
                                                        option: Currency
                                                    ) => option.code || ''}
                                                    renderInput={(params) => (
                                                        <StyledTextField
                                                            {...params}
                                                            label="Choose Currency To Convert To"
                                                        />
                                                    )}
                                                    renderOption={(
                                                        props,
                                                        option: Currency
                                                    ) => (
                                                        <Box
                                                            component="li"
                                                            {...props}
                                                        >
                                                            {option.code}
                                                        </Box>
                                                    )}
                                                    onChange={(
                                                        event: React.ChangeEvent<{}>,
                                                        value: Currency | null
                                                    ) => {
                                                        if (value) {
                                                            form.setFieldValue(
                                                                'targetCurrency',
                                                                value
                                                            );
                                                        } else {
                                                            form.setFieldValue(
                                                                'targetCurrency',
                                                                ''
                                                            );
                                                        }
                                                    }}
                                                />
                                            )}
                                        </Field>
                                        <ErrorMessage name="targetCurrency" />
                                    </Grid>
                                </StyledInnerGridContainer>
                                <StyledIconButton type="submit">
                                    <StyledCurrencyExchangeIcon />
                                    <StyledTypographyButton variant="button">
                                        Convert
                                    </StyledTypographyButton>
                                </StyledIconButton>
                                <StyledInnerGridContainer container>
                                    <StyledGridItem item>
                                        <Field
                                            as={StyledInput}
                                            type="number"
                                            name="targetCurrencyAmount"
                                            placeholder="Result"
                                            value={targetCurrencyAmount}
                                        />
                                    </StyledGridItem>
                                </StyledInnerGridContainer>
                            </StyledOuterGridContainer>
                        </Form>
                    </Formik>
                </StyledCurrencyConverterBox>
            )}
        </Box>
    );
};

export default CurrencyConverter;
