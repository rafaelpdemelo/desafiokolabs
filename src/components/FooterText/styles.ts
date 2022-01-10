import styled from "styled-components";


export const FooterText = styled.footer`
    margin-left: 13px;
    font-family: Rajdhani;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    color: rgba(0, 0, 0, 0.25);

    @media (max-width: 360px){
        margin-left: 92px;
        width: 263px;
        text-align: center;
        font-family: Rajdhani;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 15px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;

        color: rgba(0, 0, 0, 0.25);

    }
`