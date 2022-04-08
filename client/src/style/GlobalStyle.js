import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box 
	}
	body{
		background-color: #f5f5f5
	}
	p,span,button,h1,h2,h3,h4,h5,h6,label{
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		color: ${(props) => props.theme.colors.primary}
	}
`;
