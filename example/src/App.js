import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import { TwoButtons, Button, FormPageHeadingWithStepBack, FormTitle, GridRow , Typography, PageWrapper, Table, TableRow, TableCell, TableBodyCell, TextFieldComponent} from 'exorior-ui'
import 'exorior-ui/dist/index.css'
import { Divider, Grid, ThemeProvider } from "@material-ui/core";
import FormExample from "./Form";
const { createMuiTheme } = require('@material-ui/core');

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8583F4',
    },
    buttonHover: {
      main: 'rgba(114,111,240,1)',
    },
    purpleDarkerText: {
      main: '#24227B',
    },
    buttonTextDarkGray: {
      main: '#7F7F7F',
    },
    pageGrayBackground: {
      main: '#EEEEF9',
    },
    navItemCollapseText: {
      main: '#7F7F7F',
    },
    danger: {
      main: '#f44336',
    },
  },
  overrides: {
    MuiSwitch: {
      thumb: {
        '$checked$checked + &': {
          opacity: 1.0,
          backgroundColor: 'rgb(129, 171, 134)', // Light green, aka #74d77f
        },
      },
    },
    MuiInputBase: {
      root: {
        //    fontWeight: 500
      },
    },
  },
});

const App = () => {
  return <ThemeProvider theme={theme}>
    <Router>
    <h1>Buttons</h1>
    <Grid container spacing={4}>
      <Grid item><Button color={"primary"} variant={"contained"}>Click !</Button></Grid>
      <Grid item><Button color={"primary"} variant={"outlined"}>Click !</Button></Grid>
      <Grid item><Button color={"primary"} variant={"text"}>Click !</Button></Grid>
    </Grid>
    <h1>Divider</h1>
    <Divider />
    <h1>Form page heading</h1>
    <FormPageHeadingWithStepBack title={"heelo"}>asd</FormPageHeadingWithStepBack>
      <h1>FormTitle</h1>
      <FormTitle >Heslo</FormTitle>
      <h1>GridRow</h1>
      <GridRow
        leftSide={<Typography variant={'h3'}>Pracovní dny</Typography>}
      >
        5 dnu
      </GridRow>
      <PageWrapper heading={"ahopj"} rightBar={<Button>Novy</Button>}>Loader</PageWrapper>
      <h1>Table</h1>
      <Table
          tableHeading={
            <TableRow>
              <TableCell />
              <TableCell>
                <Typography variant={'pBold'}>Číslo objednávky</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'pBold'}>Jméno zákazníka</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'pBold'}>E-mail zákazníka</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'pBold'}>Stav objednávky</Typography>
              </TableCell>
            </TableRow>
          }
        >
        <TableRow>
          <TableBodyCell>1.</TableBodyCell>
          <TableBodyCell>Lukas</TableBodyCell>
          <TableBodyCell>Kopecky.</TableBodyCell>
          <TableBodyCell>Kopecky.</TableBodyCell>
          <TableBodyCell>Kopecky.</TableBodyCell>
        </TableRow>
      </Table>
      <h1>TextField</h1>
      <Grid container spacing={3}>
        <Grid item><TextFieldComponent  /></Grid>
        <Grid item><TextFieldComponent variant={"outlined"}/></Grid>
        <Grid item><TextFieldComponent variant={"filled"}/></Grid>
        <Grid item><TextFieldComponent variant={"outlined"} type={"search"}/></Grid>
        <Grid item><TextFieldComponent
          variant={'outlined'}
          label={'Číslo zájezdu'}
          value={"1238n"}
          fullWidth
          type={'password'}
          shrink
          disabled
        /></Grid>
        <Grid item><TextFieldComponent
          variant={'outlined'}
          label={'Číslo zájezdu'}
          value={"1238n"}
          fullWidth
          type={'phone'}
          shrink
          disabled
        /></Grid>
      </Grid>
      <h1>Two Buttons</h1>
      <TwoButtons handleClickFirst={() => alert("first")} handleClickSecond={() => alert("second")} titleFirst={"prvni"} titleSecond={"druhy"} />
      <h1>Typigraphy</h1>
      <Grid container spacing={2}>
        <Grid item><Typography variant={"h1"} > Ahoj svete</Typography> </Grid>
        <Grid item><Typography variant={"h2"} > Ahoj svete</Typography> </Grid>
        <Grid item><Typography variant={"h3"} > Ahoj svete</Typography> </Grid>
        <Grid item><Typography variant={"p"} > Ahoj svete</Typography> </Grid>
        <Grid item><Typography variant={"pBold"} > Ahoj svete</Typography> </Grid>
      </Grid>
      <FormExample />
    </Router>
  </ThemeProvider>
}

export default App
