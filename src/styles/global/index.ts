import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Poppins', sans-serif;

    user-select: none;
  }

  body {
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  html {
    scroll-behavior: smooth;
  }

  @media (max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }

  button, a{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

  *::-webkit-scrollbar {
    width: 5px;            
  }

  *::-webkit-scrollbar-track {
    background: transparent;       
  }

  *::-webkit-scrollbar-thumb {
    background-color: #EBEBEB;   
    border-radius: 20px;       
    border: 2px solid #EBEBEB;  
  }
`;

export { GlobalStyle };
