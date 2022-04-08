import { useState } from 'react';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import ModalForm from '../ModalForm';
import ModalDelete from '../ModalDelete';
import * as S from './style';

const Card = ({ title, description }) => {
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleDelete, setToggleDelete] = useState(false);

    return (
        <S.Container>
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
                title={title}
                desc={description}
            />
            <ModalDelete
                toggleDelete={toggleDelete}
                setToggleDelete={setToggleDelete}
            />
        </S.Container>
    );
};
export default Card;
