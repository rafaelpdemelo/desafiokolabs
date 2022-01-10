import styled from "styled-components";
 
export const Modal = styled.div`
    
    justify-content: center;

    width: 264px;
    height: 360px;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.1) 100%);
    backdrop-filter: blur(5px);

    border: 1px solid #f6f6fc; 
    border-radius: 15px;

    box-shadow: 0px 6px 10px rgba(102, 0, 153, 0.15);
    
    margin: -116px auto 103px 519px;


    h1 {
        font-size: 50px;
        text-align: center;
        margin-top: -25px;
    }

    img{
        margin-left: 70px;

    }


    p{
        font-size: 12px;
        color: red;
        text-align: center;
        letter-spacing: 1.5px;
        font-style: normal;
        margin-top: 2px;
    }

    a{
        margin: 0 47px;
        color: #660099;
        font-family: Rajdhani;
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 16px;


        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 1.5px;
        text-decoration-line: underline;
        text-transform: uppercase;

        position: absolute;
        width: 158px;
        height: 9px;
        left: 16px;
        top: 371px;
    }

    form{
        margin: 0 21px;
        
    }

    input {
        border: none;
        align-items: center;
        width: 220px;
        padding: 0 1.5rem;
        height: 36px;
        font-weight: 400;
        font-size: 1rem;

        background: rgba(119, 61, 177, 0.08);
        mix-blend-mode: multiply;
        opacity: 0.5;
        box-shadow: inset 0px 4px 15px rgba(0, 0, 0, 0.25), inset 0px -5.95px 15px 3px rgba(255, 255, 255, 0.8);
        
        border-radius: 10px;
    }

    label {
        font-weight: 600;
    font-size: 10px;
    font-style: normal;
        margin-left: 60px;
        color: #393939;
        mix-blend-mode: normal;
        letter-spacing: 1.5px;

    }

    #senhaLabel{
            margin-left: 95px;
        }

    button[type="submit"]{
        border: none;
        margin-top: 10px;
        width: 220px;
        height: 37px;
        background: linear-gradient(180deg, rgba(69, 16, 138, 0.2) 0%, rgba(164, 94, 255, 0.2) 94.59%);
        border-radius: 10px;

        box-shadow: 0px -4px 6px rgba(255, 255, 255, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(50px);

        font-family: Rajdhani;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;

        text-align: center;
        letter-spacing: 0.75px;
        text-transform: uppercase;

        color: #FFFFFF;

        &:hover{
            background: linear-gradient(180deg, rgba(69, 16, 138, 0.5) 0%, rgba(164, 94, 255, 0.5) 94.59%);
        }

    }


    @media (max-width: 360px) {
        margin: -181px auto 154px 54px;
    }
    

    

` 