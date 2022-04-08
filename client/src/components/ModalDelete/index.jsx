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

const ModalDelete = ({ toggleDelete, setToggleDelete }) => {
    return (
        <Container isActive={toggleDelete}>
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
