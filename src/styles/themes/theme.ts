import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  color: {
    primary: '#FFFFFF',
    secondary: '#97B43C',
    hover: '#EFEFEF',

    opacity100: 'rgba(0, 0, 0, 0.04)',
    opacity200: 'rgba(0, 0, 0, 0.1)',
    opacity300: 'rgba(0, 0, 0, 0.3)',
    opacity400: 'rgba(0, 0, 0, 0.5)',
    opacity500: 'rgba(0, 0, 0, 0.9)',

    gray100: '#F4F4F4',
    gray200: '#4B4545',
    gray300: '#D9D9D9',
    gray400: '#666666',
    gray500: '#000000',

    red100: '#F8D7D7',
    red200: '#F4B1B1',
    red300: '#E83B31',
    red400: '#D10000',

    blue100: '#A4C9EB',
    blue200: '#53A4EC',

    green100: 'rgb(151, 180, 60)',
    green200: 'rgb(150, 179, 59)',
    green300: 'rgb(30, 69, 36)',

    success100: '#1E641D',
    error100: '#E3213E',
    icon100: '#4B4545',
  },
  fontSizes: {
    1: '1.2rem',
    2: '1.4rem',
    3: '1.6rem',
    4: '2rem',
    5: '2.4rem',
    6: '2.8rem',
    7: '3.2rem',
    8: '4.8rem',
    9: '6.4rem',
    10: '7.2rem',
  },
  weight: {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
  },
  space: {
    0: '2px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
  },
  radius: {
    1: '4px',
    2: '8px',
    3: '10px',
    4: '16px',
    5: '20px',
    round: '50%',
  },
  shadows: {
    1: '0 2px 4px 0px rgba(0, 0, 0, 0.2)',
    2: '2px 2px 12px 2px rgba(99, 99, 99, 0.3)',
    3: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  zIndices: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export default theme;
