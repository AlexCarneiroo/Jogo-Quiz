import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #012E40;
`;

export const TemaDoQuiz = styled.h3`
    color: #F2E3D5;
    font-family: sans-serif;
    padding: 20px 5px;
`;
export const ContainerMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 30px;
`;

export const AreaPergunta = styled.div`
    padding: 20px;
    border-radius: 5px;
    background-color: #026773;
    color:#F2E3D5;
    font-family: sans-serif;
`;

export const AreaQues = styled.div`
    padding: 20px;
    margin: 10px 0px;
    display: flex;
    justify-content: end;
    align-items: end;
`;

export const Ol = styled.ol`
`;

export const Li = styled.li`
    margin: 10px 0px;
    cursor: pointer;
    color: #F2E3D5;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;

    &:hover{
        color: #889C9B;
    }
`;

export const AreaDeResposta = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const TextRespostaCerta = styled.span`
    color: green;
    font-family: sans-serif;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 600;
`;
export const TextRespostaErrada = styled.span`
    color: red;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: 600;
`;

export const TextFinal = styled.span`
    color: blue;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 600;
`;
export const Btns = styled.button`
    padding:10px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #026773;
    color: #FFF;
`;