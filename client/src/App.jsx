import Theme from './style/Theme';
import GlobalStyle from './style/GlobalStyle';
import Header from './components/Header';
import ModalForm from './components/ModalForm';
import { useState } from 'react';
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
        </Theme>
    );
};
export default App;
