import { makeStyles } from '@material-ui/core/styles'

const fontSize = {
  default: {
    h1: '1.5rem',
    h2: '1.2rem',
    h3: '1.1rem',
    p: '1rem'
  }
}

const fontWeight = {
  h1: 700,
  h2: 700,
  h3: 600,
  p: 400,
  pBold: 600
}

export const useStyles = makeStyles((theme) => ({
  /** *  ***/
  /** H1 **/
  /** *  ***/
  h1: {
    fontSize: fontSize.default.h1,
    fontWeight: fontWeight.h1,
    lineHeight: '1.2'
  },
  /** *  ***/
  /** H2 **/
  /** *  ***/
  h2: {
    fontSize: fontSize.default.h2,
    fontWeight: fontWeight.h2,
    lineHeight: '1.2'
  },
  /** *  ***/
  /** H3 **/
  /** *  ***/
  h3: {
    fontSize: fontSize.default.h3,
    fontWeight: fontWeight.h3,
    lineHeight: '1.2'
  },
  /** *  ***/
  /** P **/
  /** *  ***/
  p: {
    fontSize: fontSize.default.p,
    fontWeight: fontWeight.p,
    lineHeight: 1.75
  },
  pBold: {
    fontSize: fontSize.default.p,
    fontWeight: fontWeight.pBold,
    lineHeight: 1.75
  },
  /** *      ***/
  /** OTHERS **/
  /** *      ***/
  navText: {
    color: theme.palette.primary.main,
    fontSize: '1.115rem',
    fontWeight: 500
  },
  navTextActive: {
    color: theme.palette.purpleDarkerText.main,
    fontSize: '1.115rem',
    fontWeight: 500
  },
  collapseNavItemText: {
    color: theme.palette.navItemCollapseText.main,
    fontSize: '1.125rem',
    fontWeight: 400
  },
  collapseNavItemTextActive: {
    color: theme.palette.purpleDarkerText.main,
    fontSize: '1.125rem',
    fontWeight: 400
  },
  wrapperHeading: {
    color: theme.palette.purpleDarkerText.main,
    fontSize: '1.925rem',
    fontWeight: 500
  },
  underTableHeading: {
    color: '#5b5b5b',
    fontSize: '0.95rem'
  },
  cardFormHeading: {
    color: theme.palette.purpleDarkerText.main,
    fontSize: '1.35rem',
    fontWeight: 500
  }
}))
