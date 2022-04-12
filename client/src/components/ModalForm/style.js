import styled from 'styled-components';

export const Container = styled.div`
    display: ${(props) => (props.isActive ? 'block' : 'none')};
`;
export const Blackscreen = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: block;
    z-index: 10;
`;
export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 30px;
    max-width: 370px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
    border-radius: 8px;
`;
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    width: 100%;
`;

export const Message = styled.span`
    color: ${(props) => props.messageColor};
    font-size: 14px;
    text-align: center;
`;
export const Title = styled.h2``;
export const CloseButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
    transition: 200ms ease-out;
    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }
`;
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    width: 100%;
`;
export const Label = styled.label`
    font-weight: 600;
`;
export const Input = styled.input`
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
    border: 2px solid ${(props) => props.theme.colors.primary};
`;
export const Submit = styled.button`
    padding: 8px 20px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    border-radius: 4px;
    transition: 200ms ease-out;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
    }
`;
