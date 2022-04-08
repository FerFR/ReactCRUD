import Theme from './style/Theme';
import { useState } from 'react';
import GlobalStyle from './style/GlobalStyle';
import Header from './components/Header';
import ModalForm from './components/ModalForm';
import Card from './components/Card';
import Grid from './components/Grid';

const App = () => {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <Theme>
            <GlobalStyle />
            <Header setToggleModal={setToggleModal} />
            <ModalForm
                setToggleModal={setToggleModal}
                toggleModal={toggleModal}
            />
            <Grid>
                <Card
                    title="Teste"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consectetur a aliquid at nisi labore!"
                />
                <Card
                    title="Teste"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consectetur a aliquid at nisi labore!"
                />
                <Card
                    title="Teste"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consectetur a aliquid at nisi labore!"
                />
            </Grid>
        </Theme>
    );
};
export default App;
