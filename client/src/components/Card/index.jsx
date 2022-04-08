import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import * as S from './style';

const Card = ({ title, paragraph }) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Paragraph>{paragraph}</S.Paragraph>
            <S.Footer>
                <S.ActionButton>
                    <BsFillTrashFill />
                </S.ActionButton>
                <S.ActionButton>
                    <BsPencilSquare />
                </S.ActionButton>
            </S.Footer>
        </S.Container>
    );
};
export default Card;
