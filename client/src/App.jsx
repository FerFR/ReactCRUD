import Theme from './style/Theme';
import GlobalStyle from './style/GlobalStyle';
import Header from './components/Header';

const App = () => {
    return (
        <Theme>
            <GlobalStyle />
            <Header />
        </Theme>
    );
};
export default App;
