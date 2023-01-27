import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}

	body {
		font-weight: 400;
		font-size: 16px;
		font-family: 'Source Sans Pro', sans-serif;
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyle
