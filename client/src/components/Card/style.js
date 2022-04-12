import styled from 'styled-components';

export const Container = styled.article`
    background-color: ${(props) => props.theme.colors.primary};
    padding: 20px;
    border-radius: 8px;
    width: 330px;
    color: white;
`;
export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: inherit;
`;
export const Paragraph = styled.p`
    font-size: 16px;
    margin-bottom: 40px;
    color: inherit;
`;
export const Footer = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`;
export const ActionButton = styled.button`
    padding: 6px;
    font-size: 20px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: none;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    transition: 200ms ease-out;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
    }
`;
