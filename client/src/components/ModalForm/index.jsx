import { useState } from 'react';
import * as S from './style';

const ModalForm = ({
    toggleModal,
    setToggleModal,
    modalTitle = 'Create Post',
    modalButton = 'Create',
    method = 'post',
    title = '',
    desc = '',
}) => {
    const [formData, setFormData] = useState({
        modalTitle: modalTitle,
        modalButton: modalButton,
        method: method,
        title: title,
        desc: desc,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <S.Container isActive={toggleModal}>
            <S.Blackscreen onClick={() => setToggleModal(false)} />
            <S.Form onSubmit={handleSubmit}>
                <S.Header>
                    <S.Title>{formData.modalTitle}</S.Title>
                    <S.CloseButton
                        onClick={() => setToggleModal(false)}
                        type="button"
                    >
                        X
                    </S.CloseButton>
                </S.Header>
                <S.FormGroup>
                    <S.Label htmlFor="inputTitle">Title</S.Label>
                    <S.Input
                        onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                        }
                        id="inputTitle"
                        placeholder="Post Title"
                        value={formData.title}
                    />
                </S.FormGroup>

                <S.FormGroup>
                    <S.Label htmlFor="inputDesc">Desc</S.Label>
                    <S.Input
                        onChange={(e) =>
                            setFormData({ ...formData, desc: e.target.value })
                        }
                        id="inputDesc"
                        placeholder="Post Description"
                        value={formData.desc}
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Submit type="submit">{formData.modalButton}</S.Submit>
                </S.FormGroup>
            </S.Form>
        </S.Container>
    );
};
export default ModalForm;
