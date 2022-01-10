import { createGlobalStyle } from "styled-components";

import bgcores from "../assets/bgcores.png";
import bgcoresmobile from "../assets/bgcoresmobile.png";


export const GlobalStyle = createGlobalStyle`
    
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {

        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body, footer, input, label, textarea, button {
        font-family: "Rajdhani", sans-serif;
    }


    
    body {
    background-image: url(${bgcores});
    background-repeat: no-repeat;
    background-size: cover;


    -webkit-font-smoothing: antialiased;

    @media (max-width: 360px){
    background-image: url(${bgcoresmobile});
    background-repeat: no-repeat;
    background-size: cover;
    }


 }
    
`;


/*

*/