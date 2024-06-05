import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
    };

    color: {
      primary: string;
      secondary: string;
      hover: string;

      opacity100: string;
      opacity200: string;
      opacity300: string;
      opacity400: string;
      opacity500: string;

      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;

      green100: string;
      green200: string;
      green300: string;

      blue100: string;
      blue200: string;

      success100: string;
      error100: string;
      icon100: string;

      red100: string;
      red200: string;
      red300: string;
      red400: string;
    };

    weight: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: number;
      7: number;
      8: number;
      9: number;
    };

    space: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
    };

    radius: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      round: string;
    };

    shadows: {
      1: string;
      2: string;
      3: string;
    };

    zIndices: {
      appBar: number;
      drawer: number;
      modal: number;
      snackbar: number;
      tooltip: number;
    };
  }
}
