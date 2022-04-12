import { useState } from 'react';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import ModalForm from '../ModalForm';
import ModalDelete from '../ModalDelete';
import * as S from './style';

const Card = ({ id, title, description, updatePosts }) => {
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleDelete, setToggleDelete] = useState(false);

    return (
        <S.Container key={id}>
            <S.Title>{title}</S.Title>
            <S.Paragraph>{description}</S.Paragraph>
            <S.Footer>
                <S.ActionButton onClick={() => setToggleDelete(true)}>
                    <BsFillTrashFill />
                </S.ActionButton>
                <S.ActionButton onClick={() => setToggleModal(true)}>
                    <BsPencilSquare />
                </S.ActionButton>
            </S.Footer>
            <ModalForm
                toggleModal={toggleModal}
                setToggleModal={setToggleModal}
                modalTitle="Update Post"
                modalButton="Update"
                method="put"
                id={id}
                title={title}
                desc={description}
                updatePosts={updatePosts}
            />
            <ModalDelete
                id={id}
                toggleDelete={toggleDelete}
                setToggleDelete={setToggleDelete}
                updatePosts={updatePosts}
            />
        </S.Container>
    );
};
export default Card;
