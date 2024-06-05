import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global-style';
import theme from './themes/theme';

interface Props {
  children: ReactNode;
}

const MyThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

MyThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyThemeProvider;
