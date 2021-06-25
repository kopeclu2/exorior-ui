import React from "react";
import { Form, Formik, Field } from "formik";
import {cFieldNames, validationSchema} from './schema'
import {FieldText, FieldSelect, Button , DatePicker, TimePicker, FieldCheckBox, FieldSwitch, FieldRadioGroup} from "exorior-ui";
import {Grid, MenuItem, Box} from "@material-ui/core";

const FormExample = () => {
  const initialValues = {
    [cFieldNames.firstName]: '',
    [cFieldNames.lastName]: '',
    [cFieldNames.username]: '',
    [cFieldNames.email]: '',
    [cFieldNames.phone]: '',
    [cFieldNames.role]: '',
    [cFieldNames.switch]: '',
    [cFieldNames.gender]: '',
  };
  return(
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {

      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <Form onSubmit={handleSubmit} onChange={handleChange}>
          {JSON.stringify(values)}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name={cFieldNames.username}
                label={'Přihlašovací jméno'}
                fullWidth
                component={FieldText}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name={cFieldNames.role}
                label={'Uživatelská role'}
                onChange={handleChange}
                fullWidth
                component={FieldSelect}
              >

                  <MenuItem key={1} value={'A'}>
                    A
                  </MenuItem>
                <MenuItem key={2} value={'B'}>
                  B
                </MenuItem>

              </Field>
            </Grid>
          </Grid>
          <Box pt={3} pb={3} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field
                name={cFieldNames.firstName}
                label={'Jméno'}
                fullWidth
                component={FieldText}
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name={cFieldNames.lastName}
                label={'Příjmení'}
                fullWidth
                component={FieldText}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name={cFieldNames.email}
                label={'E-mail'}
                fullWidth
                component={FieldText}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name={cFieldNames.phone}
                label={'Telefon'}
                fullWidth
                component={FieldText}
                type={"phone"}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name={cFieldNames.date}
                label={'Datum'}
                fullWidth
                component={DatePicker}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name={cFieldNames.time}
                label={'Time'}
                fullWidth
                component={TimePicker}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name={cFieldNames.check}
                label={'Check'}
                fullWidth
                component={FieldCheckBox}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name={cFieldNames.switch}
                label={'Switch'}
                fullWidth
                component={FieldSwitch}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name={cFieldNames.gender}
                component={FieldRadioGroup}
                color={'primary'}
                options={[
                  { label: "Muž", value: 'MAN' },
                  { label: "Žena", value: 'WOMAN' },
                  { label: "Jiné", value: 'OTHER' },
                ]}
                row
              />
            </Grid>

            <Grid item xs={12}>
              <Grid container justify={'flex-end'}>
                <Box mt={3}>
                  <Button
                    variant={'contained'}
                    color={'primary'}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
export default FormExample
