import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5; //Variavel dentro do CSS
        --green: #33CC95;
        --red: #E52E4D;
        --blue: #5429cc;
        --blue-light: #6933FF;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
        --submit-text-button: #ffffff;
        --input-background: #e7e9ee;
        --border-modal: #d7d7d7;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size padrão = 16px(Desktop)
    html {
        // Diminuindo o font-size do site de acordo com a tela do usuario
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    // REM -> 1rem é igual ao tamanho do font-size da nossa pagina(1rem = 16px)
    body{
        background: var(--background); // Utilizando variavel
        -webkit-font-smoothing: antialiased; // Fontes ficam mais detalhadas(hackzin)
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled]{ // Estilo para botões disabled
        opacity: 0.6;
        cursor: not-allowed; // mostra uma plaquinha de "não fume"
    }
    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border:0;
        background: transparent;

        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9)
        }
    }
`