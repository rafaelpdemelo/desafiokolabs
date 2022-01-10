import styled from "styled-components";


export const Particles = styled.div`
    html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#particle-canvas {
  width: 100%;
  height: 100%;
}
`



export const Content = styled.div`
    width: 732px;
    height: 215px;
    margin: 69px auto;
    line-height: 112px;


    .title {
        text-align: center;
        font-size: 72px;
        line-height: 112px;
        align-items: center;
        letter-spacing: -2.5px;
    }

    .secondTitle{
        font-size: 144px;
        letter-spacing: -2.5px;
    }


    @media (max-width: 360px){

        width: 313px;
        height: 112px;
        margin: 143px auto;
        line-height: 25px;



        .title{
        font-size: 36px;
        line-height: 56px;
        letter-spacing: -0.5px;

        }

        .secondTitle{
        
        font-size: 64px;
        letter-spacing: -0.5px;
    }
    }


`




