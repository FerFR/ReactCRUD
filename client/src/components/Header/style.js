import styled from 'styled-components';
import { Desktop, Mobile, Tablet } from '../../style/Responsive';
export const Container = styled.header`
    padding: 10px;
    background-color: white;
`;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 370px;
    ${Tablet({ maxWidth: '760px' })}
    ${Desktop({ maxWidth: '1000px' })}
    margin: 0 auto;
`;
export const Logo = styled.h1``;
export const Button = styled.button`
    border-radius: 50%;
    padding: 2px 10px;
    font-size: 32px;
    transition: 200ms ease-out;
    border: none;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
    }
`;
