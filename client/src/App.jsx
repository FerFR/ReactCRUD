import Theme from './style/Theme';
import { useState, useEffect } from 'react';
import GlobalStyle from './style/GlobalStyle';
import Header from './components/Header';
import ModalForm from './components/ModalForm';
import Card from './components/Card';
import Grid from './components/Grid';
import request from './request';

const App = () => {
    const [toggleModal, setToggleModal] = useState(false);

    const [posts, setPosts] = useState([]);

    const getAllPosts = async () => {
        let response = await request.get();
        setPosts(response.data);
    };

    useEffect(getAllPosts, []);

    return (
        <Theme>
            <GlobalStyle />
            <Header setToggleModal={setToggleModal} />
            <ModalForm
                updatePosts={getAllPosts}
                setToggleModal={setToggleModal}
                toggleModal={toggleModal}
            />
            <Grid>
                {!!posts.length ? (
                    posts.map((post) => (
                        <Card
                            key={post._id}
                            id={post._id}
                            title={post.title}
                            description={post.desc}
                            updatePosts={getAllPosts}
                        />
                    ))
                ) : (
                    <h2>Add Some Posts</h2>
                )}
            </Grid>
        </Theme>
    );
};
export default App;
