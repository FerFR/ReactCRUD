import {
    Container,
    Blackscreen,
    Form,
    Header,
    Title,
    CloseButton,
    FormGroup,
    Submit,
} from '../ModalForm/style';
import { Text } from './style';
import request from '../../request';

const ModalDelete = ({ toggleDelete, setToggleDelete, id, updatePosts }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        await request.delete(id);
        updatePosts();
        setToggleDelete(false);
    };

    return (
        <Container onSubmit={handleSubmit} isActive={toggleDelete}>
            <Blackscreen onClick={() => setToggleDelete(false)} />
            <Form>
                <Header>
                    <Title>Delete Post</Title>
                    <CloseButton
                        type="button"
                        onClick={() => setToggleDelete(false)}
                    >
                        X
                    </CloseButton>
                </Header>
                <Text>Do you want delete this post?</Text>
                <FormGroup>
                    <Submit type="submit">Delete</Submit>
                </FormGroup>
            </Form>
        </Container>
    );
};
export default ModalDelete;
