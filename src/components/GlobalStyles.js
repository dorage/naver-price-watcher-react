import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Nanum Gothic', sans-serif;
    }
    body{
        box-sizing:content-box;
    }
`;

const component = () => (
    <>
        <GlobalStyle />
        <Reset />
    </>
);

export default component;
