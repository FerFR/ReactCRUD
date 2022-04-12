import { useState } from 'react';
import * as S from './style';
import request from '../../request';

const ModalForm = ({
    toggleModal,
    setToggleModal,
    updatePosts,
    modalTitle = 'Create Post',
    modalButton = 'Create',
    method = 'post',
    id = '',
    title = '',
    desc = '',
}) => {
    const [formData, setFormData] = useState({
        modalTitle: modalTitle,
        modalButton: modalButton,
        method: method,
        id: id,
        title: title,
        desc: desc,
        message: '',
        messageColor: 'red',
    });

    const createPost = async () => {
        setFormData({ ...formData, message: '' });

        let response = await request.post({
            title: formData.title,
            desc: formData.desc,
        });

        if (response.status === 400) {
            setFormData({
                ...formData,
                message: response.message,
                messageColor: 'red',
            });
            return;
        }

        setFormData({
            ...formData,
            title: '',
            desc: '',
            message: response.message,
            messageColor: 'green',
        });
        updatePosts();
    };
    const updatePost = async () => {
        setFormData({ ...formData, message: '' });

        let response = await request.put(id, {
            title: formData.title,
            desc: formData.desc,
        });

        if (response.status === 400 || response.status === 404) {
            setFormData({
                ...formData,
                message: response.message,
                messageColor: 'red',
            });
            return;
        }

        setFormData({
            ...formData,
            message: response.message,
            messageColor: 'green',
        });
        updatePosts();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (method === 'post') {
            createPost();
            return;
        }
        updatePost();
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

                <S.Message messageColor={formData.messageColor}>
                    {formData.message}
                </S.Message>

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
