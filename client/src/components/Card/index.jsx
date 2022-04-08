import { useState } from 'react';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import ModalForm from '../ModalForm';
import * as S from './style';

const Card = ({ title, description }) => {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Paragraph>{description}</S.Paragraph>
            <S.Footer>
                <S.ActionButton>
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
        </S.Container>
    );
};
export default Card;
