import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #F0F0F7;  
    font-size: 60%;
  }
  
  *{
    margin: 0;
    padding: 0;
    border: 0;      
    outline: 0;
    box-sizing: border-box;
  }
  body, #root, html{
    background-color: var(--color-background);
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }
  body, 
  input, 
  button, 
  textarea,
  select{
    font-size: 1.6rem;
    font-family: Poppins;
    font-weight: 500;   
    color: var(--color-text-base);
  }
  input,
  select,
  textarea{
    @media(max-width: 50rem){
        font-size: 1.4rem;
      }
  }
  button{
    cursor: pointer;
  }
  @media(min-wdith: 65rem){
    :root{
      font-size: 62.5%;
    }
  }
`

export default GlobalStyle