import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: '#222',
        secondary: '#f1b168',
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
