import * as S from './style';

const ModalForm = ({ toggleModal, setToggleModal }) => {
    return (
        <S.Container isActive={toggleModal}>
            <S.Blackscreen onClick={() => setToggleModal(false)} />
            <S.Form>
                <S.Header>
                    <S.Title>Create Post</S.Title>
                    <S.CloseButton
                        onClick={() => setToggleModal(false)}
                        type="button"
                    >
                        X
                    </S.CloseButton>
                </S.Header>
                <S.FormGroup>
                    <S.Label htmlFor="inputTitle">Title</S.Label>
                    <S.Input id="inputTitle" placeholder="Post Title" />
                </S.FormGroup>

                <S.FormGroup>
                    <S.Label htmlFor="inputDesc">Desc</S.Label>
                    <S.Input id="inputDesc" placeholder="Post Description" />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Submit type="submit">Submit</S.Submit>
                </S.FormGroup>
            </S.Form>
        </S.Container>
    );
};
export default ModalForm;
