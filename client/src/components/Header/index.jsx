import * as S from './style';

const Header = ({ setToggleModal }) => {
    return (
        <S.Container>
            <S.Content>
                <S.Logo>React CRUD</S.Logo>
                <S.Button onClick={() => setToggleModal(true)}>+</S.Button>
            </S.Content>
        </S.Container>
    );
};
export default Header;
